function middle_word(str) {
    let ret = "";
    if (str.length % 2 != 0) ret = str[Math.ceil(str.length / 2)];
    else ret = str[str.length / 2 - 1] + str[str.length / 2];

    return ret;
}

str = "studdy";
console.log(middle_word(str));