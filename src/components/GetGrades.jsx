import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GetGrades = () => {
	const [grades, setGrades] = useState(null);
	const [loading, setLoading] = useState(false);
	const [jsessionId, setJsessionId] = useState('');

	useEffect(() => {
		const cookieString = document.cookie;

		const jsessionId = cookieString
			.split('; ')
			.find(row => row.startsWith('JSESSIONID='))
			?.split('=')[1];

		setJsessionId(jsessionId);
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			await fetch(
				// Encrypt jsessionids on the client later on, and have the server decrypt them
				`/api/getGrades?headless=false&jsessionid=${jsessionId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
				.then(res => res.text())
				.then(txt => setGrades(txt));
		} catch (error) {
			console.error('Error fetching JSESSIONID:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div>{jsessionId}</div>
			<form onSubmit={handleSubmit}>
				<button type="submit" disabled={loading}>
					{loading ? 'Loading...' : 'Get Grades'}
				</button>
			</form>
			<div>{grades}</div>
		</>
	);
};

export default GetGrades;
