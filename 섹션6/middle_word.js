function solution(seoul) {
    var answer = '';
    var index;
    for (i in seoul) {
        if (seoul[i] == "Kim") index = i;
    }
    answer = "김서방은 " + i + "에 있다";

    return answer;
}
seoul = ["Jane", "Jane", "Jane", "Jane", "Jane", "Kim"];
console.log(solution(seoul));