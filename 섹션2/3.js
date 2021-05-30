function RSP(arr_A, arr_B) {
    let ret = "";
    for (i in arr_A) {
        if (arr_A[i] == arr_B[i]) console.log('D');
        else if (arr_A[i] == 1) {
            if (arr_B[i] == 2) console.log('B');
            else if (arr_B[i] == 3) console.log('A');
        } else if (arr_A[i] == 2) {
            if (arr_B[i] == 1) console.log('A');
            else if (arr_B[i] == 3) console.log('B');

        } else if (arr_A[i] == 3) {
            if (arr_B[i] == 1) console.log('B');
            else if (arr_B[i] == 2) console.log('A');

        }
    }
    return ret;
}

arr_A = [2, 3, 3, 1, 3];
arr_B = [1, 1, 2, 2, 3];
console.log(RSP(arr_A, arr_B));