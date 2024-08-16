import { h } from 'preact';
import { useState } from 'preact/hooks';

// no comments. Its react
const GetSessionPrompt = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [sessionid, setSessionid] = useState('');

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(`/api/getSession?headless=true`, {
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
		} catch (error) {
			console.error('Error fetching JSESSIONID:', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</label>
			</div>
			<div>
				<label>
					Password:
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</label>
			</div>
			<div>
				<button type="submit" disabled={loading}>
					{loading ? 'Logging in...' : 'Submit'}
				</button>
				<div>{sessionid}</div>
			</div>
		</form>
	);
};

export default GetSessionPrompt;
