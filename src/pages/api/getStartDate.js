import { fetchData, htmlToJson, getJSONPath } from './getTemplate.js';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalClassList.do?navkey=academics.classes.list';

	const getStartDate = (classesJSON, getJSONPath) => {
		const startDates = [];
		const classes = [
			getJSONPath(classesJSON, [2]),
			getJSONPath(classesJSON, [4]),
			getJSONPath(classesJSON, [6]),
			getJSONPath(classesJSON, [8]),
			getJSONPath(classesJSON, [10]),
			getJSONPath(classesJSON, [12]),
			getJSONPath(classesJSON, [14])
		].filter(item => item !== 'null');

		for (let i = 0; i < classes.length; i++) {
			const className = JSON.stringify(
				getJSONPath(classesJSON, [(i + 1) * 2, 11, 0])
			);
			const startDate = JSON.stringify(
				getJSONPath(classesJSON, [(i + 1) * 2, 13, 0])
			);
			startDates.push([className, startDate]);
		}

		return startDates;
	};

	return fetchData(
		url,
		jsessionId,
		link,
		getJSONPath,
		htmlToJson,
		getStartDate
	);
}
