function find_capital(str) {
    let count = 0;
    for (x of str) {
        if (x >= 'A' && 'Z' >= x) count++;
    }
    return count;

}

console.log(find_capital("KoreaTimeGood"));