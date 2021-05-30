function small_to_big(str) {
    let ret = "";
    for (x in str) {
        if (str[x] >= 'a' && 'z' >= str[x]) {
            ret += str[x].toUpperCase();
        } else {
            ret += str[x];
        }
    }
    return ret;
}

let str = "abcdefA";
console.log(small_to_big(str));