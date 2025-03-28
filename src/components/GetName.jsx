import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GetName = () => {
	const [returnItem, setReturnItem] = useState(null);
	const [loading, setLoading] = useState(false);
	const [jsessionId, setJsessionId] = useState('');
	const headless = true;

	useEffect(() => {
		const cookieString = document.cookie;

		const jsessionId = cookieString
			.split('; ')
			.find(row => row.startsWith('JSESSIONID='))
			?.split('=')[1];

		setJsessionId(jsessionId);

		setLoading(true);
		try {
			fetch(
				`/api/getName?headless=${headless}&jsessionid=${jsessionId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
				.then(res => res.json())
				.then(data => {
					setReturnItem(JSON.stringify(data));
				})
				.finally(() => setLoading(false));
		} catch (error) {
			console.error('Error:', error);
			setLoading(false);
		}
	}, []);

	return (
		<div>
			{returnItem &&
				(() => {
					const { name, yearOfGrad } = JSON.parse(returnItem);
					return (
						<>
							{name.match(/"text":"([^"]+)"/)[1]}
							<br />
							{yearOfGrad.match(/"text":"([^"]+)"/)[1]}
						</>
					);
				})()}
		</div>
	);
};

export default GetName;
