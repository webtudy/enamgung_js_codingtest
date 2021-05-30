function switch_size(str) {
    let ret = "";
    for (x of str) {
        if (x >= "a" && x <= "z") ret += x.toUpperCase(); //if(x==x.toLowerCase());
        else ret += x.toLowerCase();
    }

    return ret;
}

str = "HeLlO";
console.log(switch_size(str));