function sum_cut(i, sum, cut, min_arr) {

    let ans;
    let idx;
    while (min_arr[i] && sum < cut) {
        sum += min_arr[i];
        if (sum + min_arr[i + 1] > cut || min_arr[i + 1] == false) {
            ans = sum;
            idx = i;
            break;
        }

    }
    return ans, idx;
}

function quiet_feel(min_arr, n) {
    min_arr.sort((a, b) => a - b);
    let sum = 0;
    let sum_cut_i = sum_cut();
    let i_idx = 0;
    let sum_arr = [];
    for (let i of min_arr) {
        sum += i;
    }
    let cut = Math.floor(sum / n);
    sum = 0;
    i = 0;

    while (i != min_arr.length - 1) {
        sum_arr.push(sum_cut(i_idx, sum, cut, min_arr));
        console.log(sum_cut_i[1]);
        sum = 0;
        i++;

    }
    console.log(sum_arr);

    console.log(sum);

    return sum;
}
let min_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;
console.log(quiet_feel(min_arr, n));