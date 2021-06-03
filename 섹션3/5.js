function compact(str) {
    let answer = "";
    let cnt = 1;
    str += " ";
    for (i = 0; i < str.length - 1; i++) { //for(i in str)은 왜 안돼????
        if (str[i] === str[i + 1]) {
            cnt++;
        } else {
            answer += str[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}

str = "KKHSSSSSSSE";
console.log(compact(str));