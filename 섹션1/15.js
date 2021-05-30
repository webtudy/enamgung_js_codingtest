function middle_word(str) {
    let ret = "";
    if (str.length % 2 != 0) ret = str[Math.floor(str.length / 2)];
    else ret = str[str.length / 2 - 1] + str[str.length / 2];

    return ret;
}

str = "study";
console.log(middle_word(str));