import puppeteer from 'puppeteer-extra';
import UserAgent from 'user-agents';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
// I need to comment this or else ill go nuts

export async function POST({ request, url }) {
	const userAgent = new UserAgent({ deviceCategory: 'desktop' });

	const { username, password } = await request.json();

	puppeteer.use(StealthPlugin());

	const browser = await puppeteer.launch({
		headless: true,
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-blink-features=AutomationControlled',
			'--disable-gpu',
			'--start-maximized',
			'--window-position=0,0',
			'--window-size=1920,1080',
			'--lang=en-US,en'
		],
		defaultViewport: null
	});
	const page = await browser.newPage();

	await page.setUserAgent(userAgent.random().toString());

	/* THIS IS WHAT A CAPTCHA LOOKS LIKE:
		<img
			jsname="O9Milc"
			alt="CAPTCHA image of text used to distinguish humans from robots"
			id="captchaimg"
			class="TrZEUc"
			src="/Captcha?v=2&{captcha random string}"
			data-iml="6553.5"
		>

		So, heres what we need to do:
			1. input email
			2. check for an image with the id captchaimg
				a. If it is there is an image:
					1. copy the src
					2. display the image to the user
					3. show an input to the user
					4. on submission, send the input to puppeteer
				b. if there is no image, continue with pasting the password
	 */

	try {
		await page.goto(
			'https://aspen.cpsd.us/aspen/logonSSO.do?deploymentId=ma-cambridge&districtId=*dst&idpName=Cambridge%20Google%20SAML'
		);

		await page.waitForSelector('input[type="email"]');

		await page.type('input[type="email"]', username);
		await page.keyboard.press('Enter');

		await Promise.race([
			page.waitForSelector('input[type="password"]', { visible: true }),
			page.waitForSelector('iframe[src*="recaptcha"], div#captcha', {
				visible: true
			})
		]);

		const captchaDetected = await page.$(
			'iframe[src*="recaptcha"], div#captcha'
		);

		if (captchaDetected) {
			await browser.close();
			return new Response(
				JSON.stringify({
					error: 'google asked for captcha, we dont support that yet lmao'
				}),
				{
					code: 1,
					status: 500,
					headers: { 'Content-Type': 'application/json' }
				}
			);
		}

		await page.type('input[type="password"]', password);
		await page.keyboard.press('Enter');

		await page.waitForNavigation();

		const currentUrl = page.url();
		if (currentUrl.includes('.cpsd.us')) {
			const cookies = await page.cookies();
			const jsessionidCookie = cookies.find(
				cookie => cookie.name === 'JSESSIONID'
			);

			if (jsessionidCookie) {
				const jsessionid = jsessionidCookie.value;

				console.log('JSESSIONID:', jsessionid);

				await browser.close();

				return new Response(JSON.stringify({ jsessionid }), {
					status: 200,
					headers: { 'Content-Type': 'application/json' }
				});
			} else {
				console.error('JSESSIONID cookie not found');
				await browser.close();
				return new Response(
					JSON.stringify({ error: 'JSESSIONID cookie not found' }),
					{
						status: 400,
						headers: { 'Content-Type': 'application/json' }
					}
				);
			}
		} else {
			await page.waitForNavigation();
			if (page.url().includes('.cpsd.us')) {
				const cookies = await page.cookies();
				const jsessionidCookie = cookies.find(
					cookie => cookie.name === 'JSESSIONID'
				);

				if (jsessionidCookie) {
					const jsessionid = jsessionidCookie.value;

					console.log('JSESSIONID:', jsessionid);

					await browser.close();

					return new Response(JSON.stringify({ jsessionid }), {
						status: 200,
						headers: { 'Content-Type': 'application/json' }
					});
				} else {
					console.error('JSESSIONID cookie not found');
					await browser.close();
					return new Response(
						JSON.stringify({
							error: 'JSESSIONID cookie not found'
						}),
						{
							status: 400,
							headers: { 'Content-Type': 'application/json' }
						}
					);
				}
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
