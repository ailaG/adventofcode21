
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