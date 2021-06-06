function solution(participant, completion) {
    var answer = '';
    var n = participant.length;
    for (var i = 0; i < n; i++) {
        var X = participant[i];
        console.log(X);
        if (completion.includes(X) == false) {
            answer += X;

            break;
        } else {
            completion.splice(completion.indexOf(X), 1);
            participant.splice(i--, 1);
        }
    }
    return answer;
}
participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
completion = ["josipa", "filipa", "marina", "nikola"];
console.log(solution(participant, completion));