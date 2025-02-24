import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const GetInfo = ({ callType = 'grades' }) => {
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
		/*
			"{\"text\":\"AP Chemistry\"}","{\"text\":\"87.86 B+\"}","{\"text\":\"Computer Science 2 Honors\"}","{\"text\":\"91.24 A-\"}","{\"text\":\"AP Calculus BC\"}","{\"text\":\"\"}","{\"text\":\"Falcon Block\"}","{\"text\":\"\"}","{\"text\":\"PE RSTA\"}","{\"text\":\"\"}","{\"text\":\"Balance Block\"}","{\"text\":\"\"}","{\"text\":\"English 10\"}","{\"text\":\"76.5 C+\"}"
		*/
		try {
			switch (callType) {
				case 'grades':
					fetch(
						// TODO: Encrypt jsessionids on the client later on, and have the server decrypt them
						`/api/getGrades?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'courses':
					fetch(
						`/api/getCourse?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'length':
					fetch(
						`/api/getLength?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'roomNumbers':
					fetch(
						`/api/getRoom?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'startDate':
					fetch(
						`/api/getStartDate?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'teachers':
					fetch(
						`/api/getTeachers?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedJSON = JSON.stringify(
								Object.fromEntries(
									matches
										.map(([, text], i, arr) =>
											i % 2 === 0
												? [
														text,
														arr[i + 1]
															? arr[i + 1][1]
															: ''
													]
												: null
										)
										.filter(Boolean)
								),
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
						.finally(() => setLoading(false));
					break;
				case 'attendance':
					fetch(
						`/api/getAttendance?headless=${headless}&jsessionid=${jsessionId}`,
						{
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							}
						}
					)
						.then(res => res.text())
						.then(str => {
							console.log('Raw response:', str);
							const matches = [
								...str.matchAll(/\{\\"text\\":\\"(.*?)\\"\}/g)
							];
							const parsedGrades = {};
							for (let i = 0; i < matches.length; i += 4) {
								const [subject, abs, tdy, dsm] = matches
									.slice(i, i + 4)
									.map(match => match[1]);
								parsedGrades[subject] = { abs, tdy, dsm };
							}
							const parsedJSON = JSON.stringify(
								parsedGrades,
								null,
								4
							);
							setReturnItem(parsedJSON);
						})
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
			console.error('Error:', error);
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
