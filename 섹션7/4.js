function insert_sort(arr) {
    for (i = 1; i < arr.length; i++) {
        let tmp = arr[i];
        for (j = i - 1; j >= 0; j--) {
            if (tmp < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j] = tmp;
                tmp = arr[j];
                console.log(arr);
            }
        }
    }
    return arr;
}



arr = [11, 7, 5, 6, 10, 9];
console.log(insert_sort(arr));