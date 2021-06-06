function is_same_map(map1, map2) {
    if (map1.size !== map2.size) return false;
    for ([key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value) return false;
    }
    return true;
}

function find_all_anagram(a, b) {
    let tH = new Map();
    let sH = new Map();
    let answer = 0;

    for (x of b) {
        if (tH.has(x)) tH.set(x, tH.get(x) + 1);
        else tH.set(x, 1);
    }

    let len = b.length - 1;
    for (i = 0; i < len; i++) {
        if (sH.has(a[i])) sH.set(a[i], sH.get(a[i]) + 1);
        else sH.set(a[i], 1);
    }
    let lt = 0;
    for (rt = len; rt < a.length; rt++) {
        if (sH.has(a[rt])) sH.set(a[rt], sH.get(a[rt]) + 1);
        else sH.set(a[rt], 1);
        if (is_same_map(sH, tH)) answer++;
        sH.set(a[lt], sH.get(a[lt]) - 1);
        if (sH.get(a[lt]) === 0) sH.delete(a[lt]);
        lt++;

    }
    return answer;
}


let a = "bacaAacba";
let b = "abc";
console.log(find_all_anagram(a, b));