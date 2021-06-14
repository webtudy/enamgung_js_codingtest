function bubble_sort(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            i = 0;
        }
    }
    return arr;
}

arr = [13, 5, 11, 7, 23, 15];
console.log(bubble_sort(arr));