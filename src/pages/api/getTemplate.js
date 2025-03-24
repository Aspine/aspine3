import axios from 'axios';
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

	const headers = {
		Cookie: `JSESSIONID=${jsessionId}`,
		'User-Agent': userAgent.random().toString()
	};

	try {
		const response = await axios.get(link, { headers });
		const parsedHTML = htmlToJson(response.data);
		const classesJSON = getJSONPath(
			parsedHTML,
			[1, 2, 11, 0, 1, 0, 0, 1, 0, 0, 1, 22, 0, 1, 0]
		);

		const json = functionName(classesJSON, getJSONPath);

		return new Response(json, {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
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
			tag: element.tagName ? element.tagName.toLowerCase() : null,
			attributes: {},
			children: []
		};

		// Ensure we don't attempt to parse non-element nodes incorrectly
		if (element.attributes) {
			for (let attr of element.attributes) {
				obj.attributes[attr.name] = attr.value;
			}
		}

		for (let child of element.childNodes) {
			if (child.nodeType === 3) {
				// Text node
				if (child.textContent.trim()) {
					obj.children.push({
						text: child.textContent.trim()
					});
				}
			} else if (child.nodeType === 1) {
				// Element node
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
		}
	}

	return JSON.stringify(element);
}
