import puppeteer from 'puppeteer';
import UserAgent from 'user-agents';

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

		const hrefValue = `javascript:doParamSubmit(2100, document.forms['classListForm']`;
		const escapedHrefValue = hrefValue.replace(
			/[.*+?^${}()|[\]\\]/g,
			'\\$&'
		);
		const regex = new RegExp(
			`<a[^>]*href="${escapedHrefValue}"[^>]*>(.*?)<\/a>([\\s\\S]*?)(<[^>]+>[\\s\\S]*?<\\/[^>]+>)([\\s\\S]*?)(<[^>]+>[\\s\\S]*?<\\/[^>]+>)`
		);
		const match = html.match(regex);

		let extractedHtml = '';
		if (match) {
			extractedHtml = match[3] + match[5];
		}

		await browser.close();

		return new Response(extractedHtml, {
			status: 200,
			headers: { 'Content-Type': 'text/plain' }
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
