import { fetchData, htmlToJson, getJSONPath } from './getTemplate.js';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalClassList.do?navkey=academics.classes.list';

	const getAttendance = (classesJSON, getJSONPath) => {
		const attendances = [];
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
				getJSONPath(classesJSON, [(i + 1) * 2, 11, 0])
			);
			const abs = JSON.stringify(
				getJSONPath(classesJSON, [(i + 1) * 2, 17, 0])
			);
			const tdy = JSON.stringify(
				getJSONPath(classesJSON, [(i + 1) * 2, 19, 0])
			);
			const dsm = JSON.stringify(
				getJSONPath(classesJSON, [(i + 1) * 2, 21, 0])
			);
			attendances.push([className, abs, tdy, dsm]);
		}

		return attendances;
	};

	return fetchData(
		url,
		jsessionId,
		link,
		getJSONPath,
		htmlToJson,
		getAttendance
	);
}
