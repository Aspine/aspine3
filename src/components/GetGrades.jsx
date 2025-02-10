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
				// TODO: Encrypt jsessionids on the client later on, and have the server decrypt them
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
			<div>
				<br />

				{grades}
				<br />
				<br />
				{grades &&
					grades.length > 0 &&
					grades
						.split('","')
						.map(item => item.replace(/(^"|"$)/g, ''))
						.reduce((acc, item, index, arr) => {
							if (index % 2 === 0) {
								try {
									const className = JSON.parse(
										item.replace(/\\/g, '')
									).text;
									const grade = JSON.parse(
										arr[index + 1].replace(/\\/g, '')
									).text;
									acc.push([className, grade]);
								} catch (e) {
									console.error('Error parsing JSON:', e);
								}
							}
							return acc;
						}, [])
						.map((grade, idx) => (
							<div key={idx}>
								<span>{grade[0]}</span>: <span>{grade[1]}</span>
								{localStorage.setItem(`${grade[0]}`, grade[1])}
							</div>
						))}
			</div>
		</>
	);
};

export default GetGrades;
