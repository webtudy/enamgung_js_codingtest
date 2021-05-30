function del_repeat(n, arr) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        if (arr.indexOf(arr[i]) == i) answer.push(arr[i]);
    }
    return answer;

}

arr = ['good', 'time', 'good', 'time', 'student'];
console.log(del_repeat(5, arr));