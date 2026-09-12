/* node cp_2.cjs < input.txt */

/*

    You are given an array of n integers.
    Find the number that appears the most times in the array.
    If multiple numbers have the same maximum frequency, output the smallest one.

*/

/*

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const n = input[0];
const arr = input.slice(1);
const map = new Map();
let episodes = -1;
let hunt = Infinity;

const most = () => {

    for(let x=0; x<arr.length; x++){

        map.set(arr[x], (map.get(arr[x]) || 0) + 1);

    }

    for(let [number, frequency] of map){

        episodes = frequency>episodes ? frequency : episodes 

    }

    for(let [number, frequency] of map){

        if(frequency===episodes){ hunt=number; break; }

    } 

}

most();
console.log(hunt);

*/