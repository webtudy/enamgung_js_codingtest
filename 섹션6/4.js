function calculator(char1, char2, operator) {
    if (operator == '+') return char1 + char2;
    else if (operator == '-') return char1 - char2;
    else if (operator == '/') return char1 / char2;
    else if (operator == '*') return char1 * char2;
}

function postfix(str) {
    let stack = [];
    for (i of str) {
        let n = parseInt(i);
        if (n >= 1 && n <= 9) {
            stack.push(n);

        } else if (i == '+' || i == '-' || i == '*' || i == '/') {
            let tmp1 = stack[stack.length - 2];
            let tmp2 = stack[stack.length - 1];
            console.log(stack);
            stack.pop();
            stack.pop();
            stack.push(calculator(tmp1, tmp2, i));
        }
    }

    return stack[0];
}
str = "352+*9-";
//3*(5+2)-9
console.log(postfix(str));
// 3

// 1+2*3 + (4+2)/2=
// //숫자가 나오면 그대로 출력한다
// //(나오면 스택에 push한다.
// //* / 나오면 스택에 push 한다.
// //+ - 연산이 나오면 (, )
// 123*+42+2/+