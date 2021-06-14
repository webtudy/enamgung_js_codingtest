function xy_sort(arr) {
    for (i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        if (arr[i][1] < arr[i - 1][1]) {
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
            i = 0;
        }
    }
    for (i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        if (arr[i][0] < arr[i - 1][0]) {
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
            i = 0;
        }
    }


    return arr;
}
arr = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6]
];

console.log(xy_sort(arr));