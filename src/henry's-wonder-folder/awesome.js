function convertToFourScale(gradeTypeArray) {
	const gradeScale = [
		{ min: 97, max: 100, gpa: 4.0 },
		{ min: 93, max: 96, gpa: 4.0 },
		{ min: 90, max: 92, gpa: 3.7 },
		{ min: 87, max: 89, gpa: 3.3 },
		{ min: 83, max: 86, gpa: 3.0 },
		{ min: 80, max: 82, gpa: 2.7 },
		{ min: 77, max: 79, gpa: 2.3 },
		{ min: 73, max: 76, gpa: 2.0 },
		{ min: 70, max: 72, gpa: 1.7 },
		{ min: 67, max: 69, gpa: 1.3 },
		{ min: 65, max: 66, gpa: 1.0 },
		{ min: 0, max: 64, gpa: 0.0 }
	];
	const convertedGrades = [];

	for (let i = 0; i < gradeTypeArray.length; i++) {
		const percentGrade = gradeTypeArray[i][1];
		const classType = gradeTypeArray[i][0];

		let gpa = 0.0;
		for (let j = 0; j < gradeScale.length; j++) {
			const scale = gradeScale[j];
			if (percentGrade >= scale.min && percentGrade <= scale.max) {
				gpa = scale.gpa;
				break;
			}
		}
		+convertedGrades.push([classType, gpa]);
	}
	return convertedGrades;
}

function calcAvgGPA(gradeTypeArray, isWeighted) {
	let avgGPA = 0;

	for (i in gradeTypeArray) {
		if (isWeighted == true) {
			switch (gradeTypeArray[i][0].toLowerCase()) {
				case 'ap':
					avgGPA += gradeTypeArray[i][1] + 1.0;
					break;
				case 'hn':
					avgGPA += gradeTypeArray[i][1] + 0.5;
					break;
				case 'rg':
					avgGPA += gradeTypeArray[i][1];
					break;
				default:
					throw new Error(`Invalid typing (${gradeTypeArray[i][0]})`);
			}
		} else {
			avgGPA += gradeTypeArray[i][1];
		}
	}
	return avgGPA / gradeTypeArray.length;
}

function getType(className) {
	let typing;

	className = className.toLowerCase();
	if (typeof className === string) {
		if (className.includes('honors')) {
			typing = 'hn';
		} else if (className.includes('ap')) {
			typing = 'ap';
		} else {
			typing = 'rg';
		}
	} else {
		throw new Error(`Invalid arguement exception ${className}`);
	}

	return typing;
}
