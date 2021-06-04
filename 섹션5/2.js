function same_element(arr_1, arr_2) {
    let ret = [];
    for (i of arr_1) {
        for (j of arr_2) {
            if (i == j) ret.push(i);
        }
    }


    return ret.sort(function(a, b) { return a - b; });
}
arr_1 = [1, 3, 9, 5, 2, 11];
arr_2 = [3, 2, 5, 11, 8];

console.log(same_element(arr_1, arr_2));