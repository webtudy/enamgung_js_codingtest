function solution(answers) {
    var answer = [];
    var cnt = [0, 0, 0];
    var supoza = [
        [2, 1, 2, 3, 2, 4, 2, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    for (i in answers) {

        if (answers[i] == supoza[0][0]) {
            cnt[0] += 1;
        }
        console.log(answers[i], supoza[0][0], cnt);
        supoza[0].push(supoza[0].shift());
    }

    console.log('------');

    for (i in answers) {

        if (answers[i] == supoza[1][0]) {
            cnt[1] += 1;
        }
        console.log(answers[i], supoza[1][0], cnt);
        supoza[1].push(supoza[1].shift());

    }
    console.log('------');
    for (i in answers) {

        if (answers[i] == supoza[2][0]) {
            cnt[2] += 1;
        }
        console.log(answers[i], supoza[2][0], cnt);
        supoza[2].push(supoza[2].shift());

    }
    let max = Math.max.apply(null, cnt);
    let max_index = cnt.indexOf(max)
    answer.push(max_index + 1);

    for (i = max_index + 1; i < cnt.length; i++) {
        if (cnt[i] == max) answer.push(i + 1);
    }

    return answer;
}

answers = [1, 2, 3, 4, 5, 4];
console.log(solution(answers));