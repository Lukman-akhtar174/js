const marvels_heros = ["spiderman", "thor", "ironman"];
const dc_heros = ["batman", "superman", "flash"];

// marvels_heros.push(dc_heros);

// console.log(marvels_heros);
// console.log(marvels_heros[3][1]);

// const all_heros = marvels_heros.concat(dc_heros);
// console.log(all_heros);

const all_new_heros = [...marvels_heros, ...dc_heros];
// console.log(all_new_heros);

const another_arr = [1, 2, 3,[2,3,6], 4, 5, 6 ,[9,8,4,[1,2,3 ]]];
// console.log(another_arr.flat(Infinity)); //depth

console.log(Array.from("Kashif Malik")); //convert to array