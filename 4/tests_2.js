import { getBingoInput as getInput, runBingoOnFile as runOnFile } from './helpers.js';
import { play } from './code_2.js';
const testedFunc = play;

const tests = [
	[ getInput('./input_test.txt'), 1924 ]
	
];

for (const testTuple of tests) {
	//testTuple[0] = testTuple[0].replace("\t","");
	const testTarget = testTuple[0];
	const res_wanted = testTuple[1];
	const res_actual = testedFunc(testTarget['numbers'], testTarget['boards']); // I could try-catch but eh, just fail if you fail
	if ( res_wanted !== res_actual )
		console.log('failed:',testTarget,
			'wanted',res_wanted,
			'returned',res_actual);
	else
		console.log('passed:',testTarget);
}