import puppeteer from 'puppeteer';
import UserAgent from 'user-agents';

export async function POST({ request, url }) {
	const userAgent = new UserAgent({ deviceCategory: 'desktop' });

	const { username, password } = await request.json();
	const headless = !(url.search === '?headless=false');

	const browser = await puppeteer.launch({ headless });
	const page = await browser.newPage();

	await page.setUserAgent(userAgent.random().toString());

	try {
		await page.setDefaultNavigationTimeout(60000);

		await page.goto(
			'https://aspen.cpsd.us/aspen/logonSSO.do?deploymentId=ma-cambridge&districtId=*dst&idpName=Cambridge%20Google%20SAML'
		);

		await page.waitForNavigation();

		// only work if its cpsd.us, there are some edge cases where it was trying to load the wrong url and hanging
		const currentUrl = page.url();
		if (currentUrl.includes('.cpsd.us')) {
			const jsessionid = currentUrl.match(/jsessionid=([^&]*)/)[1];

			// store the session id as a cookie
			await page.setCookie({
				name: 'JSESSIONID',
				value: `${jsessionid}.puse2aspn10ap01`,
				domain: '.cpsd.us',
				path: '/',
				maxAge: 1800
			});

			console.log('JSESSIONID:', jsessionid);

			await browser.close();

			// return the session
			return new Response(JSON.stringify({ jsessionid }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		} else {
			console.error('not a district domain');
			await browser.close();
			return new Response(
				JSON.stringify({ error: 'not a district domain (json)' }),
				{
					status: 400,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}
	} catch (error) {
		console.error('puppet not happy :c so heres the error:', error);
		await browser.close();
		return new Response(JSON.stringify({ error: 'something went wrong' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
