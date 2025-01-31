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
			'https://aspen.cpsd.us/aspen/calendarWidget.do?groupPageWidgetOid=GPW0000010B09h&widgetId=calendar_1&groupPageWidgetOid=GPW0000010B09h&1738346395076'
		);

		await page.waitForNavigation();

		// only work if its cpsd.us, there are some edge cases where it was trying to load the wrong url and hanging
		const currentUrl = page.url();

		// store the session id as a cookie

		console.log('JSESSIONID:', jsessionid);

		await browser.close();

		// return the session
		return new Response(JSON.stringify({ jsessionid }), {
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
