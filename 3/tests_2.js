import { getInput, runOnFile } from './helpers.js';
import { o2, co2, life_support_rating } from './code_2.js';
const testedFunc = life_support_rating;

const tests = [
	//[ getInput('./input_test.txt'), (23).toString(2) ] // o2
	//[ getInput('./input_test.txt'), (10).toString(2).padStart(5,'0') ] // co2
	[ getInput('./input_test.txt'), 230 ] // final
];

for (const testTuple of tests) {
	//testTuple[0] = testTuple[0].replace("\t","");
	const testTarget = testTuple[0];
	const res_wanted = testTuple[1];
	const res_actual = testedFunc(testTarget); // I could try-catch but eh, just fail if you fail
	if ( res_wanted !== res_actual )
		console.log('failed:',testTarget,
			'wanted',res_wanted,
			'returned',res_actual);
	else
		console.log('passed:',testTarget);
}