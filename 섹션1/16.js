function no_repeat(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) answer += str[i];
    }
    return answer;
}
str = "ksekkset";
console.log(no_repeat(str));