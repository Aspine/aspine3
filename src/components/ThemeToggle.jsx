import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

function openThemeDB() {
	return new Promise((resolve, reject) => {
		const request = indexedDB.open('themeDB', 1);

		request.onerror = () => reject('Failed to open IndexedDB');

		request.onsuccess = () => resolve(request.result);

		request.onupgradeneeded = event => {
			const db = event.target.result;
			db.createObjectStore('theme', { keyPath: 'id' });
		};
	});
}

async function setThemeInDB(theme) {
	const db = await openThemeDB();
	const transaction = db.transaction(['theme'], 'readwrite');
	const store = transaction.objectStore('theme');
	store.put({ id: 'currentTheme', value: theme });
}

async function getThemeFromDB() {
	const db = await openThemeDB();
	return new Promise(resolve => {
		const transaction = db.transaction(['theme'], 'readonly');
		const store = transaction.objectStore('theme');
		const request = store.get('currentTheme');

		request.onsuccess = () =>
			resolve(request.result ? request.result.value : 'light');
		request.onerror = () => resolve('light');
	});
}

const ThemeToggle = () => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		async function loadTheme() {
			const savedTheme = await getThemeFromDB();
			document.documentElement.setAttribute('data-theme', savedTheme);
			setTheme(savedTheme);
		}
		loadTheme();
	}, []);

	const toggleTheme = async () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
		setTheme(newTheme);
		await setThemeInDB(newTheme);
	};

	return (
		<button
			onClick={toggleTheme}
			className="text-[var(--text-color-light)]"
		>
			Light/Dark mode toggle
		</button>
	);
};

export default ThemeToggle;
