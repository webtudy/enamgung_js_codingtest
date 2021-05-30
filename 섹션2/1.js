function print_max(n, arr) {
    let answer = [];
    answer.push(arr[0]);
    for (i = 1; i < n; i++) {
        if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
}

arr = [7, 3, 9, 5, 6, 12];
console.log(print_max(6, arr));