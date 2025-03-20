import { fetchData, htmlToJson, getJSONPath } from './getTemplate.js';

export async function POST({ request, url }) {
	const jsessionId = url.searchParams.get('jsessionid');
	const link =
		'https://aspen.cpsd.us/aspen/portalClassList.do?navkey=academics.classes.list';

	const getGrades = (classesJSON, getJSONPath) => {
		const grades = [];
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
				getJSONPath(classesJSON, [i + 1, 7, 0])
			);
			const grade = JSON.stringify(
				getJSONPath(classesJSON, [i + 1, 7, 0])
			);
			grades.push([className, grade]);
		}

		return grades;
	};

	return fetchData(url, jsessionId, link, getJSONPath, htmlToJson, getGrades);
}
/*
{
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "6": "",
    "8": "",
    "1109": "",
    "2135": "",
    "2606": "",
    "3104": "",
    "5102": "",
    "": "",
    "Select current record checkbox": "",
    "FY": "",
    "Solomon, Alaina": "",
    "AP Chemistry": "",
    "7/1/2024": "",
    "88.93 B+": "",
    "Wu, Eric ; Tupper, Malinda ; Jang, Andrew": "",
    "1311A": "",
    "Computer Science 2 Honors": "",
    "95.5 A": "",
    "Benson, Ross": "",
    "AP Calculus BC": "",
    "90.0 A-": "",
    "Landwehr, Joshua ; Chaney, Melissa": "",
    "Falcon Block": "",
    "O'Connell, Michael": "",
    "PE RSTA": "",
    "Q3": "",
    "Landwehr, Joshua": "",
    "Balance Block": "",
    "S2": "",
    "Labaze, Natasha": "",
    "English 10": "",
    "89.17 B+": ""
}

{
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "6": "",
    "8": "",
    "1109": "",
    "2135": "",
    "2606": "",
    "3104": "",
    "5102": "",
    "": "",
    "Select current record checkbox": "",
    "FY": "",
    "Solomon, Alaina": "",
    "AP Chemistry": "",
    "7/1/2024": "",
    "Wu, Eric ; Tupper, Malinda ; Jang, Andrew": "",
    "1311A": "",
    "Computer Science 2 Honors": "",
    "Benson, Ross": "",
    "AP Calculus BC": "",
    "Landwehr, Joshua ; Chaney, Melissa": "",
    "Falcon Block": "",
    "O'Connell, Michael": "",
    "PE RSTA": "",
    "Q3": "",
    "Landwehr, Joshua": "",
    "Balance Block": "",
    "S2": "",
    "Labaze, Natasha": "",
    "English 10": ""
}
*/
