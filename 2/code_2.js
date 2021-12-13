
class submarineGPS {
	constructor(horizontal=0, vertical=0, aim=0) {
		this.coords = {
			h: horizontal,
			v: vertical
		}
		this.aim = aim;
	}
	forward(x) {
		this.coords.h += x;
		this.coords.v += this.aim * x;
	}
	down(x) {
		this.aim += x;
	}
	up(x) {
		this.down( (-1) * x );
	}

}

class Instruction {
	constructor(command, value) {
		this.command = command;
		this.value = value;
	}

	execute(gps) {
		switch(this.command) {
			// TODO DRY
			case 'down':
				gps.down(this.value);
				break;
			case 'forward':
				gps.forward(this.value);
				break;
			case 'up':
				gps.up(this.value);
				break;
			default:
				throw 'Bad command ' + this.command;

		}
	}
}

function readInstructions(text) {
	return text.split("\n").filter(l=>l).map(line => { 
		return new Instruction( 
			line.trim().split(' ')[0],
			Number(line.split(' ')[1])
		)}
	);
}

function executeInstructionsFromText(text, return_coords=false) {
	let gps = new submarineGPS(0,0);
	const instructions = readInstructions(text);
	for (let instruction of instructions) {
		instruction.execute(gps);
	}
	if (return_coords)
		return gps.coords;
	else
		return gps.coords.h * gps.coords.v;
}
const part_2 = executeInstructionsFromText;
export { executeInstructionsFromText, part_2 };