import type { APIRoute } from 'astro';

export const POST: APIRoute = async () => {
	return new Response(JSON.stringify({ message: 'API route works!' }), {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const GET: APIRoute = async () => {
	return new Response(
		JSON.stringify({ message: 'Test route works on GET!' }),
		{
			headers: { 'Content-Type': 'application/json' }
		}
	);
};

/** HIII, so how we need to get api and jsx component to work:
	go to https://aspen.cpsd.us/aspen/logonSSO.do?deploymentId=ma-cambridge&districtId=*dst&idpName=Cambridge%20Google%20SAML
		this will create a new sso page, and google will do its thing.

	--- in puppeteer, we need to do the following: ---

	1.
		listen for a redirect, if its a google page, check if it prompts to select an account.

	2.
		If (google prompts for account) {
			select the first one
		} else {
			just do nothing
		}

		* in the else case, the user was either logged in automatically or was not signed into google
		either way, not our problem

	3.
		once google is done authenticating, we get redirected to:
			https://aspen.cpsd.us/aspen/home.do?deploymentId=ma-cambridge&jsessionid={JSESSIONID}

		Get puppeteer to read the jsessionid from the url, then close the window

	--- puppeteer stuff done ---

	Now, we store it as a cookie, and have it expire in the same amount of time that aspen has it expire
		(dont know off the top of my head, writing this w/o internet)

	Now, we basically steal the scraping from crlspen and aspine v1.
*/
