function grid_sum(arr) {
    let sum1 = sum2 = 0;
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    for (i in arr) {
        for (j in arr[i]) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
        sum1 = sum2 = 0;
    }

    for (i in arr) {
        sum1 += arr[i][i];
        sum2 += arr[i][n - i - 1];
    }
    answer = Math.max(answer, sum1, sum2);
    return answer;
}





arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];

console.log(grid_sum(arr));