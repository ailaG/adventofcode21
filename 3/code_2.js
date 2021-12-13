import { gamma, epsilon } from './code_1.js';

function process(data, func) {
	const step = (data, index) => {
		const wanted_bits = func.call(null, data).padStart(data[0].length, '0');
		console.log(index, 'bits', wanted_bits, 'data', data.length, data);

		// Halt?
		if (index > wanted_bits.length - 1)
			if (data.length != 1)
				throw `Error! O2 came up with ${data.length} results: ${data}.\n most/least bits were ${wanted_bits}`;
			else
				return data.pop();
		if (data.length === 1) 
			return data.pop();
		if (data.length === 0)
			throw 'o2 measurement filtered everything. WHY';
		// Recursion:
		return step(
			data
				.filter(datum => datum[index] === wanted_bits[index]),
			index + 1
		);
	}
	return step(data, 0);
}


function o2(data) {
	return process(data, gamma);
}
export { o2 }

function co2(data) {
	return process(data, epsilon);
}
export { co2 }

function life_support_rating(data) {
	return parseInt(o2(data),2) * parseInt(co2(data),2);
}
export { life_support_rating }