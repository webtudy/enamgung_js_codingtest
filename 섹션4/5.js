function max_num(pick, arr) {
    let n = arr.length;
    let com_arr = [];
    for (i = 0; i < n - 2; i++) {
        for (j = 1; j + i < n - 1; j++) {
            for (k = 1; k + j + i < n; k++) {

                com_arr.push(arr[i] + arr[i + j] + arr[i + j + k]);
                //console.log(arr[i], arr[i + j], arr[i + j + k]);


            }
        }
    }
    com_arr.sort(function(a, b) {
        return b - a;
    });
    let unique = com_arr.filter((item, pos) => com_arr.indexOf(item) === pos);
    console.log(unique);

    return unique[pick - 1];
}

pick = 3;
arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(max_num(pick, arr));