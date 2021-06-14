function convention_sort(arr) {
    let cnt = 1;
    let answer = 0;
    for (i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        if (arr[i][0] < arr[i - 1][0]) {
            arr[i] = arr[i - 1];
            arr[i - 1] = tmp;
            i = 0;
        }
    }
    for (i = 0; i < arr.length; i++) {
        let tmp = arr[i][1];
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j][0] >= tmp) {
                cnt++;
                tmp = arr[j][1];

            }
        }
    }


    console.log(arr);

    return answer;
}



arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7]
];

// arr = [
//     [3, 3],
//     [1, 3],
//     [2, 3]
// ];

console.log(convention_sort(arr));