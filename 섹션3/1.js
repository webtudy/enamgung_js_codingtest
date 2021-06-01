function R_word(str) {
    let flag = 0;
    let n = str.length;
    let answer = "";
    let N_str = "";
    for (i in str) {
        N_str += str[i].toUpperCase();
    }
    console.log(N_str);
    for (i = 0; i < Math.floor(n / 2); i++) {
        if (N_str[i] == N_str[n - i - 1]) flag++;
        else { answer = "NO"; break; }
    }
    if (flag == Math.floor(n / 2)) {
        answer = "YES";
    }
    return answer;
}

str = "gooG";
console.log(R_word(str));