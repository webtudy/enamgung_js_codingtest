function max_revenue(cont_d, arr) {
    let max = 0;
    let lt = 0;
    let rt = 0;
    let box = 0;
    let cnt = 1;
    while (lt < arr.length - cont_d + 1) {
        if (arr[lt + rt] !== false && cnt < cont_d) {
            box += arr[lt + rt];
            rt++;
            cnt++;

        } else if (cnt == cont_d) {
            box += arr[lt + rt];
            if (max < box) max = box;
            box = 0;
            lt++;
            rt = 0;
            cnt = 1;
        }
    }
    return max;
}
cont_d = 3;
arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(max_revenue(cont_d, arr));