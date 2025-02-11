import puppeteer from 'puppeteer';
import UserAgent from 'user-agents';
import { JSDOM } from 'jsdom';

export async function fetchData(
	url,
	jsessionId,
	link,
	getJSONPath,
	htmlToJson,
	functionName
) {
	const userAgent = new UserAgent({ deviceCategory: 'desktop' });

	const headless = !url.search.includes('?headless=false');

	const browser = await puppeteer.launch({ headless });
	const page = await browser.newPage();

	await page.setUserAgent(userAgent.random().toString());

	try {
		await page.setDefaultNavigationTimeout(60000);

		await page.setCookie({
			name: 'JSESSIONID',
			value: `${jsessionId}`,
			domain: '.cpsd.us',
			path: '/',
			maxAge: 1800
		});

		await page.goto(link);

		const html = await page.content();
		const parsedHTML = htmlToJson(html);
		const classesJSON = getJSONPath(
			parsedHTML,
			[2, 6, 22, 1, 2, 1, 1, 3, 1, 0, 3, 45, 1, 1]
		);

		const json = functionName(classesJSON, getJSONPath);

		await browser.close();

		return new Response(json, {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('puppet not happy :c so heres the error:', error);
		await browser.close();
		return new Response(
			JSON.stringify({ error: `something went wrong ${error}` }),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}
}

export function htmlToJson(html) {
	const dom = new JSDOM(html);
	const document = dom.window.document;

	function elementToJSON(element) {
		const obj = {
			tag: element.tagName.toLowerCase(),
			attributes: {},
			children: []
		};

		for (let attr of element.attributes) {
			obj.attributes[attr.name] = attr.value;
		}

		for (let child of element.childNodes) {
			if (child.nodeType === 3) {
				obj.children.push({
					text: child.textContent.trim()
				});
			} else if (child.nodeType === 1) {
				obj.children.push(elementToJSON(child));
			}
		}

		return obj;
	}

	return JSON.stringify(elementToJSON(document.documentElement));
}

export function getJSONPath(json, path) {
	let element = JSON.parse(json);
	for (let index of path) {
		if (element.children && element.children[index]) {
			element = element.children[index];
		} else {
			return null;
		}
	}
	return JSON.stringify(element);
}
