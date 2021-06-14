function select_sort(arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let stack = [];

    for (i of arr) {
        if (i < min) min = i;
    }
    for (i = 0; i < arr.length; i++) {
        let tmp = arr[arr.indexOf(min)];
        // console.log(tmp);
        arr[arr.indexOf(min)] = arr[0];
        arr[0] = tmp;
        stack.push(arr[0]);
        arr.shift();
        i--;
        min = Number.MAX_SAFE_INTEGER;

        for (j of arr) {
            if (j <= min) min = j;
        }
        return stack;
    }

}
arr = [13, 5, 11, 7, 23, 15];
console.log(select_sort(arr));