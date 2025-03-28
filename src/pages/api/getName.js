import axios from 'axios';
import UserAgent from 'user-agents';
import { JSDOM } from 'jsdom';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalStudentDetail.do?navkey=myInfo.details.detail';

	const headers = {
		Cookie: `JSESSIONID=${jsessionId}`,
		'User-Agent': new UserAgent({ deviceCategory: 'desktop' })
			.random()
			.toString()
	};

	try {
		const response = await axios.get(link, { headers });
		const name = getJSONPath(
			htmlToJson(response.data),
			[1, 2, 11, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0]
		);
		const yearOfGrad = getJSONPath(
			htmlToJson(response.data),
			[
				1, 2, 11, 0, 1, 0, 0, 1, 0, 0, 1, 6, 0, 2, 0, 11, 0, 0, 0, 1, 0,
				0, 3, 1, 0
			] // this is maybe one off, check again
		);

		const responseData = {
			name: name,
			yearOfGrad: yearOfGrad
		};

		return new Response(JSON.stringify(responseData), {
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

function htmlToJson(html) {
	const dom = new JSDOM(html);
	const document = dom.window.document;

	function elementToJSON(element) {
		const obj = {
			tag: element.tagName ? element.tagName.toLowerCase() : null,
			attributes: {},
			children: []
		};

		if (element.attributes) {
			for (let attr of element.attributes) {
				obj.attributes[attr.name] = attr.value;
			}
		}

		for (let child of element.childNodes) {
			if (child.nodeType === 3) {
				if (child.textContent.trim()) {
					obj.children.push({
						text: child.textContent.trim()
					});
				}
			} else if (child.nodeType === 1) {
				obj.children.push(elementToJSON(child));
			}
		}

		return obj;
	}

	return JSON.stringify(elementToJSON(document.documentElement));
}

function getJSONPath(json, path) {
	let element = JSON.parse(json);

	for (let index of path) {
		if (element.children && element.children[index]) {
			element = element.children[index];
		}
	}

	return JSON.stringify(element);
}
