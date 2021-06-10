function solution(a, b) {
    var answer = '';
    var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    if (a < 10) a = '0' + a;
    if (b < 10) b = '0' + b;

    var date = "2016" + '-' + a + '-' + b;
    answer += week[new Date(date).getDay()];
    return answer;
}
console.log(solution(5, 24));