function doll_pick(arr_b, arr_m) {
    let answer = 0;
    let stack = [];

    for (i = 0; i < arr_m.length; i++) { //
        for (j = 0; j < arr_b.length; j++) {
            if (arr_b[j][arr_m[i] - 1] !== 0) {
                let tmp = arr_b[j][arr_m[i] - 1];
                arr_b[j][arr_m[i] - 1] = 0;
                if (tmp == stack[stack.length - 1]) {
                    stack.pop();
                    answer += 2;
                    break;
                }
                stack.push(tmp);
                break;
            }
        }
    }
    return answer;
}
arr_b = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
]; //board 배열
arr_m = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(doll_pick(arr_b, arr_m));