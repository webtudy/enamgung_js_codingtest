function cal_score(arr_O) {
    let ret = 0;
    let flag = 0;
    for (i in arr_O) {
        if (arr_O[i] == 1) {
            flag += 1;
            ret += flag;
            console.log(arr[i], flag, ret);
        } else if (arr_O[i] == 0) {
            flag = 0;
            console.log(arr[i], flag, ret);
        }
    }
    return ret;
}

arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(cal_score(arr));