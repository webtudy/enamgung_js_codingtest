function bracket_word(str) {
    let stack = [];
    for (i of str) {

        if (i == ")") {
            while (stack[stack.length - 1] !== "(") stack.pop();
            stack.pop();
            // while(stack.pop()!=="(");if (i == "(") stack.push(i);
        } else stack.push(i);

    }

    let ret = '';
    ret = stack.join('');
    return ret;
}
str = "(()(()))a(())";
console.log(bracket_word(str));