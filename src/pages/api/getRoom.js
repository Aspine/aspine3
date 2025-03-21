import { fetchData, htmlToJson, getJSONPath } from './getTemplate.js';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalClassList.do?navkey=academics.classes.list';

	const getRoom = (classesJSON, getJSONPath) => {
		const rooms = [];
		const classes = [
			getJSONPath(classesJSON, [1]),
			getJSONPath(classesJSON, [2]),
			getJSONPath(classesJSON, [3]),
			getJSONPath(classesJSON, [4]),
			getJSONPath(classesJSON, [5]),
			getJSONPath(classesJSON, [6]),
			getJSONPath(classesJSON, [7])
		].filter(item => item !== 'null');

		for (let i = 0; i < classes.length; i++) {
			const className = JSON.stringify(
				getJSONPath(classesJSON, [i + 1, 5, 0])
			);
			const room = JSON.stringify(
				getJSONPath(classesJSON, [i + 1, 4, 0])
			);
			rooms.push([className, room]);
		}

		return rooms;
	};

	return fetchData(url, jsessionId, link, getJSONPath, htmlToJson, getRoom);
}
