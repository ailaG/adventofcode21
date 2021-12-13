import { powerConsumption as part_1 } from './code_1.js';
import { life_support_rating as part_2 } from './code_2.js';

import { getInput, runOnFile } from './helpers.js';

const input = getInput('./input.txt');
console.log('part_1:', part_1(input));
console.log('part_2:', part_2(input));
