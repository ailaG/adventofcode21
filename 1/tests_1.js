import { part_1 as testedFunc } from './code.js';

const tests = [
	// tuple like tests - [arr, res]
	[ [], 0 ],
	[ [1], 0 ],
	[ [1, 2], 1 ],
	[ [2, 1], 0 ],
	[ [199,200,208,210,200,207,240,269,260,263], 7 ]
]

for (const testTuple of tests) {
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