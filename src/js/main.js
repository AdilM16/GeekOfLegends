import * as math from "./math_function.js";
import * as boss from "./boss_function.js";
import * as hero from "./hero_function.js";

let rdmBoss = [boss.chronos, boss.lilith, boss.sauron];
let slctBoss = rdmBoss[Math.round(Math.random() * (rdmBoss.length))];

console.log(slctBoss);
console.log(boss.enigm);

