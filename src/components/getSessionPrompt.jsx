import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const GetSessionPrompt = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [sessionid, setSessionid] = useState('');
	const headless = true;

	useEffect(() => {
		const sessionViewer = document.getElementById('sessionViewer');

		const callback = (mutationList, observer) => {
			if (mutationList.length > 0) {
				window.location.href = '/dash';
			}
		};

		const observer = new MutationObserver(callback);

		observer.observe(sessionViewer, {
			childList: true,
			attributes: true,
			characterData: true,
			subtree: true
		});
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		setLoading(true);

		try {
			const response = await fetch(
				`/api/getSession?headless=${headless}`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ username, password })
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
		<form onSubmit={handleSubmit}>
			<div>
				<label>
					Username:
					<input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
						className="text-black"
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
						className="text-black"
					/>
				</label>
			</div>
			<div>
				<button type="submit" disabled={loading}>
					{loading ? 'Logging in...' : 'Submit'}
				</button>
				<div id="sessionViewer">{sessionid}</div>
			</div>
		</form>
	);
};

export default GetSessionPrompt;
