const GetGrades = () => {
	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(`/api/getGrades?headless=false`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

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

	const jsessionId = document.cookie
		.split('; ')
		.find(row => row.startsWith('JSESSIONID='))
		.split('=')[1];

	return <div>{jsessionId}</div>;
};

export default GetGrades;
