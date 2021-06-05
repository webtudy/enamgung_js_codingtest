function cont_seq(sum, arr) {
    rt = 0;
    lt = 0;
    box = 0;
    com_count = 0;
    while (arr[lt]) {
        if (box != sum) {
            if (arr[lt + rt] !== false && box + arr[lt + rt] <= sum) {
                box += arr[lt + rt];
                rt++;

            } else {
                lt++;
                rt = 0;
                box = 0;
            }
        } else if (box == sum) {
            rt = 0;
            lt++;
            com_count++;
            box = 0;
        }
    }
    return com_count;
}

sum = 6;
arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(cont_seq(sum, arr));