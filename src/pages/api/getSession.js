import puppeteer from 'puppeteer';
// I need to comment this or else ill go nuts

export async function POST({ request, url }) {
	const { username, password } = await request.json();
	const headless = !(url.searchParams.get('headless') === 'false'); // if I put /?headless=false then it will have a head, for debugging

	const browser = await puppeteer.launch({ headless });
	const page = await browser.newPage();
	/** THIS IS WHAT A CAPTCHA LOOKS LIKE:
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
		await page.setDefaultNavigationTimeout(60000); // increase the timeout cus aspen be slow

		// nice thing of aspen to make a page just to redirect to the write sso link
		await page.goto(
			'https://aspen.cpsd.us/aspen/logonSSO.do?deploymentId=ma-cambridge&districtId=*dst&idpName=Cambridge%20Google%20SAML'
		);

		// because its google sso, input the email
		await page.waitForSelector('input[type="email"]');

		await page.type('input[type="email"]', username);
		await page.keyboard.press('Enter');

		// input password once it exists on the page
		await page.waitForSelector('input[type="password"]', { visible: true });

		await page.type('input[type="password"]', password);
		await page.keyboard.press('Enter');

		// wait for it to go back to aspen
		await page.waitForNavigation();

		// only work if its cpsd.us, there are some edge cases where it was trying to load the wrong url and hanging
		const currentUrl = page.url();
		if (currentUrl.includes('.cpsd.us')) {
			const jsessionid = currentUrl.match(/jsessionid=([^&]*)/)[1];

			// store the session id as a cookie
			await page.setCookie({
				name: 'JSESSIONID',
				value: jsessionid,
				domain: '.cpsd.us',
				path: '/',
				maxAge: 900 // im guessing 15 min for session length
			}); // TODO: whenever we need to get something from aspen, if the request fails, expire the cookie

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
