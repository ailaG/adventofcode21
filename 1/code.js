// Maybe it can be done as functional
// Maybe it can be done more elegantly
// But it is done

const part_1 = arr => {
	let sum = 0;
	for (let i=1; i<arr.length; i++) 
		if (arr[i]>arr[i-1]) sum++;
	return sum;
}
export { part_1 }

const part_2 = arr => {
	// I got too lazy to test :)
	let windows = [];
	for (let i=2; i<arr.length; i++)
		windows.push(arr[i-2] + arr[i-1] + arr[i]);
	return part_1(windows);
}
export { part_2 }