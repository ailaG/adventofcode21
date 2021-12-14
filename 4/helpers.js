
// Helper funcs I'll accumulate during the event
import { readFileSync } from 'fs';


function getInput(filePath='./input.txt') {
	return readFileSync(filePath, {encoding:'utf8', flag:'r'})
		.split("\n");
}
export {getInput}; 

function runOnFile(func, filePath='./input.txt') {
	// TODO add processing func after reading
	const input = getInput(filePath);
	return func(input);
}
export {runOnFile};



import { Board } from './code_1.js'; // It's the same in both, the game changes
function getBingoInput(filePath='./input.txt') {
	let currInput = readFileSync(filePath, {encoding:'utf8', flag:'r'})
		.split("\n\n");
	const numbers = currInput.shift(1).split(',');
	const boards = currInput.map((raw,index) => {
		return new Board(
			  raw
			  	.replace(/\n/g, ' ')
				.split(' ')
				.filter(a=>a)
		,index);
	});
	return {numbers, boards}
}
export {getBingoInput}; 

function runBingoOnFile(func, filePath='./input.txt') {
	const input = getBingoInput(filePath);
	return func(input);
}
export {runBingoOnFile};
