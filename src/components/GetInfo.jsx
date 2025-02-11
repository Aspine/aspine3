import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GetInfo = ({ callType = 'grades' }) => {
	const [returnItem, setReturnItem] = useState(null);
	const [loading, setLoading] = useState(false);
	const [jsessionId, setJsessionId] = useState('');

	useEffect(() => {
		const cookieString = document.cookie;

		const jsessionId = cookieString
			.split('; ')
			.find(row => row.startsWith('JSESSIONID='))
			?.split('=')[1];

		setJsessionId(jsessionId);

		setLoading(true);

		try {
			switch (callType) {
				case 'grades':
					fetch(
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
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'courses':
					fetch(
						`/api/getCourse?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'length':
					fetch(
						`/api/getLength?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'roomNumbers':
					fetch(
						`/api/getRoom?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'startDate':
					fetch(
						`/api/getStartDate?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'teachers':
					fetch(
						`/api/getTeachers?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				case 'attendance':
					fetch(
						`/api/getAttendance?headless=false&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(txt => setReturnItem(txt))
						.finally(() => setLoading(false));
					break;
				default:
					console.error(
						'callType doesnt exist idk why tho',
						callType
					);
					setLoading(false);
			}
		} catch (error) {
			console.error('Error fetching JSESSIONID:', error);
			setLoading(false);
		}
	}, []);

	return (
		<div>
			{loading && <div>Loading...</div>}
			{returnItem}
			{/* {grades &&
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
						<div key={idx} id={`classIndex-${idx}`}>
							<span>{grade[0]}</span>: <span>{grade[1]}</span>
							{localStorage.setItem(`${grade[0]}`, grade[1])}
						</div>
					))} */}
		</div>
	);
};

export default GetInfo;
