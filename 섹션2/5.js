function grade(str) {
    let n = str.length;
    let answer = Array.from({ length: n }, () => 1);
    for (i in str) {
        for (j in str) {
            if (str[j] > str[i]) answer[i]++;
        }
    }
    return answer;
}





arr = [87, 89, 92, 100, 78, 78];
console.log(grade(arr));