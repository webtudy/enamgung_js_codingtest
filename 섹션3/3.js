function ext_Num(str) {
    let ret = "";
    for (i in str) {
        if (str[i] >= 0 && str[i] <= 9)
            ret += str[i];
    }
    ret = parseInt(ret);
    return ret;
}

str = "g0en2T0s8eSoft";
console.log(ext_Num(str));