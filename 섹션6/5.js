function steel_rod(str) {
    let stack = [];
    let answer = 0;

    for (i in str) {
        if (str[i] == '(') {
            stack.push(str[i]);
        } else {
            stack.pop();
            if (str[i - 1] == '(') answer += stack.length;
            else answer += 1;
        }
    }
    return answer;
}


str1 = "()(((()())(())()))(())"
str2 = "(((()(()()))(())()))(()())";
console.log(steel_rod(str1));
console.log(steel_rod(str2));


/*
                 1 01234 34 3234 323 21012 10
                  *)    *) *)   *)  *)    *)
                   0     3  3    3   2     1
                             1    1   11    1
let iron_bar1 = '(*)((((*)(*))((*))(*)))((*))';
*/