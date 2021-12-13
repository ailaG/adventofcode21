import { executeInstructionsFromText as testedFunc } from './code_1.js';

const tests = [
	[ '' , 0*0 ],
	[ 'forward 5\n\
		down 1', 5*1 ],
	[ 'forward 5\n\
		down 5\n\
		forward 8\n\
		up 3\n\
		down 8\n\
		forward 2', 15*10 ]
];

for (const testTuple of tests) {
	testTuple[0] = testTuple[0].replace("\t","");
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