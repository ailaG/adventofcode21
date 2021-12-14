import { play as part_1 } from './code_1.js';
import { play as part_2 } from './code_2.js';

import { getBingoInput as getInput, runBingoOnFile as runOnFile } from './helpers.js';

const input = getInput('./input.txt');
console.log('part_1:', part_1(input.numbers, input.boards));
console.log('part_2:', part_2(input.numbers, input.boards));
