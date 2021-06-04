function mk_sm_length(arr_1, arr_2) {
    while (arr_1.length != arr_2.length) {
        let n = arr_1.length;
        let m = arr_2.length;
        if (n > m)
            arr_2.push(100);
        else if (n < m)
            arr_1.push(100);

    }
    //console.log(arr_1, arr_2);
    return arr_1, arr_2;

}

function comb_arr(arr_1, arr_2) {
    let length_diff = Math.abs(arr_1.length - arr_2.length);
    //console.log(length_diff);
    let ret = [];
    mk_sm_length(arr_1, arr_2); //두 배열의 길이가 같을 때까지 최대값 추가.
    let i = 0;
    //console.log(arr_1, arr_2);
    let n = arr_1.length;
    let m = arr_2.length;
    while (i < n + m - length_diff) { //두 배열의 원래 길이만큼 리턴 배열에 넣어줄 것임.
        a = Math.min.apply(null, arr_1);
        b = Math.min.apply(null, arr_2);
        //각 배열에서의 최솟값 초기화

        k = Math.min(a, b); //두 배열의 최솟값 중 min 값 k에 초기화
        //console.log(k);
        ret.push(k); //ret배열에 k 추가
        if (k == a) arr_1.splice(arr_1.indexOf(a), 1); //최솟값이 a라면 arr_1에서 a를 삭제
        else arr_2.splice(arr_2.indexOf(b), 1); //최솟값이 b라면 arr_2에서 b를 삭제
        //console.log(k, arr_1, arr_2, ret);
        i++;
    }
    return ret;
}

arr_1 = [1, 3, 5, 11, 13];
arr_2 = [2, 3, 6, 7, 9];

console.log(comb_arr(arr_1, arr_2));