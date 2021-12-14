const board_size = 5;
class Board {
	constructor(dataArr, id='anon') {
		this.id=id;
		this.dataV = dataArr; // data vector
		let cols = Array.from(Array(board_size), () => []);
		let rows = Array.from(Array(board_size), () => []);
		dataArr.forEach((value, index) => {
			value = value.trim();
			if (value === undefined || value.length == 0) return;
			const col = Math.floor(index/board_size);
			const row = index % board_size;
			cols[col].push(value);
			rows[row].push(value); 
		})
		this.cols = cols;
		this.rows = rows;
	}
	checkVictory() {
		return (
			this.cols.some(col=>col.length == 0) || 
			this.rows.some(row=>row.length == 0)
		)
	}
	getSum() {
		const add = (a,b) => Number(a)+Number(b);
		let res = this.cols
			.map(col => col.reduce(add,0))
			.reduce(add, 0);
		return res;
	}
	mark(number) {
		this.cols = this.cols.map(col => col.filter(val => val != number));
		this.rows = this.rows.map(row => row.filter(val => val != number));
	}
}
export { Board }

function play(numbers, boards) {
	// assumes no ties
	let infinite_loop_prevention = 1000000;
	let game_won = false;
	let winner_val;
	while (numbers.length > 0 && !game_won && infinite_loop_prevention > 0 && infinite_loop_prevention--) {
		let number = numbers.splice(0,1)[0];
		boards.forEach(board => {
			board.mark(number);
			if (board.checkVictory()) {
				game_won = true;
				winner_val = board.getSum() * number;
				//console.log('winning board', board.id, 'at', number);
			}
		});
	}
	if (infinite_loop_prevention <= 0) console.log('infinite loop!');
	if (!game_won)
		throw 'Game without winners';
	return winner_val;
	// Another option is to throw an error when we win, and then we don't need some vars
	// But I don't like correct code to look like an error.
}
export { play }