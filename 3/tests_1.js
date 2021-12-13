import { getInput, runOnFile } from './helpers.js';
import { gamma, epsilon, powerConsumption } from './code_1.js';
const testedFunc = powerConsumption;

const tests = [
	//[ getInput('./input_test.txt'), (22).toString(2) ] // gamma
	//[ getInput('./input_test.txt'), (9).toString(2) ] // epsilon
	[ getInput('./input_test.txt'), 198 ] // res
	
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