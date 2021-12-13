import { part_1 } from './code_1.js';
import { part_2 } from './code_2.js';
import { readFileSync } from 'fs';
const input = readFileSync('./input.txt', {encoding:'utf8', flag:'r'})
	//.split("\n");

console.log('part_1:', part_1(input));
console.log('part_2:', part_2(input));