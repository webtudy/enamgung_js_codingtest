function cont_seq_below(max, arr) {
    let lt = 0;
    let rt = 0;
    let box = 0;
    let com_count = 0;

    while (arr[lt]) {
        if (box <= max) {
            if (arr[lt + rt] !== false && box + arr[lt + rt] <= max) {
                box += arr[lt + rt];
                com_count++;
                rt++;
            } else {
                lt++;
                rt = 0;
                box = 0;
            }
        } else if (box > max) {
            lt++;
            rt = 0;
            box = 0;
        }
    }

    return com_count
}
max = 5;
arr = [1, 3, 1, 2, 3];

console.log(cont_seq_below(max, arr));