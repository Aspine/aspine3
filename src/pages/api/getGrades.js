import puppeteer from 'puppeteer';
import UserAgent from 'user-agents';
import { JSDOM } from 'jsdom';

export async function POST({ request, url }) {
	const userAgent = new UserAgent({ deviceCategory: 'desktop' });

	const headless = !url.search.includes('?headless=false');
	const jsessionId = url.searchParams.get('jsessionid');

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

		await page.goto(
			'https://aspen.cpsd.us/aspen/portalClassList.do?navkey=academics.classes.list'
		);

		const html = await page.content();
		const json = htmlTableToJson(html);

		await browser.close();

		return new Response(json, {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('puppet not happy :c so heres the error:', error);
		await browser.close();
		return new Response(JSON.stringify({ error: 'something went wrong' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}

function htmlTableToJson(html) {
	const dom = new JSDOM(html);
	const document = dom.window.document;
	const tables = document.querySelectorAll('table');
	const jsonTables = [];

	tables.forEach(table => {
		const headers = [];
		const rows = [];
		const headerElements = table.querySelectorAll('thead th');
		const rowElements = table.querySelectorAll('tbody tr');

		headerElements.forEach(header => {
			headers.push(header.textContent.trim());
		});

		rowElements.forEach(row => {
			const cells = row.querySelectorAll('td');
			const rowData = {};
			cells.forEach((cell, index) => {
				rowData[headers[index]] = cell.textContent.trim();
			});
			rows.push(rowData);
		});

		jsonTables.push(rows);
	});

	return JSON.stringify(jsonTables, null, 2);
}
