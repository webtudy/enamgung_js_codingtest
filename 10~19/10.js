function find_word(str, char) {
    let count = 0;
    for (x of str) {
        if (x === char) count += 1;
    }
    return count;

}


let str = "hello";
let char = 'l';
console.log(find_word(str, char));

console.log("10" == 10);
console.log("10" === 10);
console.log(10 === 10);