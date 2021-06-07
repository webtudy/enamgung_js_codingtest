function right_bracket(str) {
    let answer = "YES";
    let stack = [];
    for (i of str) {
        if (i == '(') stack.push(i); //(면 넣는다
        else {
            if (stack.length == 0) return "NO";
            stack.pop();
        } //)면 없앤다. 근데 아무것도 없으면no
    }
    if (stack.length > 0) return "NO";
    return answer;
}
str = "(()(()))(())";
console.log(right_bracket(str));