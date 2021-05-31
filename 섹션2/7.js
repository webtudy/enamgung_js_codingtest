function bongury(arr) {
    let zero_arr = Array.from({ length: arr.length - 2 }, () => 0);
    arr.unshift(zero_arr);
    arr.push(zero_arr);
    for (i in arr) {
        arr[i].unshift(0);
        arr[i].push(0);

    }
    let sum = 0;
    for (i = 1; i < arr.length - 1; i++) {
        for (j = 1; j < arr.length - 1; j++) {
            let F = arr[i][j];
            if (F > arr[i - 1][j] &&
                F > arr[i + 1][j] &&
                F > arr[i][j - 1] &&
                F > arr[i][j + 1]) sum++;

        }
    }


    return sum;
}

arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
]
console.log(bongury(arr));