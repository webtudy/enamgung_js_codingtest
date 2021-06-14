function special_sort(arr) {
    let ret = [];
    arr_p = [];
    arr_n = [];
    for (i of arr) {
        if (i < 0) arr_n.push(i);
        else if (i > 0) arr_p.push(i);
    }
    for (i of arr_n) ret.push(i);
    for (i of arr_p) ret.push(i);
    return ret;
}
arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(special_sort(arr));