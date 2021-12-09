import {part_1, part_2} from './code.js';
import { readFileSync } from 'fs';
const input = readFileSync('./input.csv', {encoding:'utf8', flag:'r'})
	.split("\n").map(a=>Number(a));

console.log('part_1:', part_1(input));
console.log('part_2:', part_2(input));