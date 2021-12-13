

function gamma(data) {
	// assumes no ties, as that was not mentioned in the Q
	// also assumes all codes are same length & input not empty

	let balance = new Array(data[0].length).fill(0);

	for ( let datum of data ) {
		String(datum).split('').forEach((digit, index) => {
			(digit == 1) ? balance[index]++ : balance[index]--;
		});
	}

	const gamma = balance
		.map(digit => (Number(digit) >= 0) ? '1' : '0') // The >= is there for part 2's funcs
		.join('')
		.padStart(data[0].length, '0');
	return gamma;
}
export { gamma };

function epsilon(data) {
	// Actually a xor
	const gammaRes = gamma(data);
	const ones = new Array(data[0].length).fill(1).join('');
	return ( // Why the convertion? computers weird. 
		parseInt(gammaRes,2) ^ 
		parseInt(ones,2)
	).toString(2).padStart(5,'0');

}
export { epsilon }

function powerConsumption(data) {
	return parseInt(gamma(data),2) * parseInt(epsilon(data),2);
}
export { powerConsumption }