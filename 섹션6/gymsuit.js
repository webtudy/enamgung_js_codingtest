function solution(n, lost, reserve) {
    let i, j;
    let len = lost.length;
    let cnt = 0;
    for (i = 0; lost[i]; i++) {
        for (j = 0; reserve[j]; j++) {
            if (lost[i] == reserve[j] - 1 || lost[i] == reserve[j] + 1) {
                cnt++;
                reserve[j] = -3;
                break;
            }
        }
    }
    var answer = n - (len - cnt);
    return answer;
}
n = 5
lost = [2, 4];
reserve = [1, 3, 5];
console.log(solution(n, lost, reserve));