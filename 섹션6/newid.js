function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    var stack = [];

    for (i in new_id) {
        if ((new_id[i] >= 'a' && new_id[i] <= 'z') ||
            (new_id[i] >= '1' && new_id[i] <= '9') ||
            new_id[i] == '_' || new_id[i] == '-' ||
            new_id[i] == '.') {
            stack.push(new_id[i]);
            console.log(stack);
        }
    }
    console.log('-------');
    for (i = 0; i < stack.length; i++) {
        if (stack[i] == '.' && stack[i - 1] == '.') {
            stack.splice(i - 1, 1);
            console.log(stack, '!');
            i--;
        }
    }
    while (stack[0] == '.' || stack[stack.length - 1] == '.') {
        if (stack[0] == '.') stack.shift();
        if (stack[stack.length - 1] == '.') stack.pop();
        console.log(stack, '?');
    }
    if (stack.length == 0) stack.push('a');
    console.log(stack);

    if (stack.length >= 16) {
        stack.splice(15);
        console.log(stack, '?');
    }
    while (stack[stack.length - 1] == '.') stack.pop();
    console.log(stack)
    if (stack.length <= 2) {
        let tmp = stack[stack.length - 1];
        while (stack.length != 3) stack.push(tmp)
        console.log(stack);
    };

    answer = stack.join('');


    return answer;
}

id_1 = "...!@BaT#*..y.abcdefghijklm";
id_2 = "z-+.^.";
id_3 = "=.=";
id_4 = "123_.def";
id_5 = "abcdefghijklmn.p"

console.log(solution(id_1));
console.log(solution(id_2));
console.log(solution(id_3));
console.log(solution(id_4));
console.log(solution(id_5));



/*
1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.



*/