function anagram(str1, str2) {
    let sH1 = new Map();
    let sH2 = new Map();
    for (i of str1) {

        if (sH1.has(i)) {
            sH1.set(i, sH1.get(i) + 1);

        } else sH1.set(i, 1);
    }
    for (j of str2) {

        if (sH2.has(j)) {
            sH2.set(j, sH2.get(j) + 1);

        } else sH2.set(j, 1);
    }
    // for ([key, value] of sH1) {
    //     if (sH1.get(key) == sH2.get(key)) continue;
    //     else { ans = "NO"; break; }


    // }
    if (sH1.size !== sH2.size) return "NO"; //키값의 종류와 개수 비교
    for (let [key, val] of sH1) {
        if (!sH2.has(key) || sH2.get(key) !== val) return "NO";
    }
    // console.log(sH2.get('T'));
    return "YES";
}
str1 = 'AbaAeCe';
str2 = 'baeeACA';
str3 = 'abaCC';
str4 = 'Caaab';
console.log(anagram(str1, str2));
console.log(anagram(str3, str4));