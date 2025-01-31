import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GetGrades = ({ jsessionId }) => {
	const [grades, setGrades] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(
				`/api/getGrades?headless=false&jsessionid=${jsessionId}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log('JSESSIONID:', data.jsessionid);
			setSessionid(data.jsessionid);
			document.cookie = `JSESSIONID=${data.jsessionid}; max-age=${30 * 60}; path=/;`;
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
		</>
	);
};

export default GetGrades;
