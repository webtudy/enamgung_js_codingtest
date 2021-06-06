function solution(arr) {
    let max = 0;
    let ret;
    let SH = new Map();
    for (i of arr) {
        if (SH.has(i))
            SH.set(i, SH.get(i) + 1);
        else SH.set(i, 1);
    }

    for ([key, value] of SH) {
        if (value > max) {
            max = value;
            console.log(max);
            ret = key;
        }
    }
    console.log(SH);
    return ret;
}

arr = ['B', 'A', 'C', 'B', 'A', 'C', 'C', 'A', 'C', 'C',
    'B', 'D', 'E', 'D', 'E'
];

console.log(solution(arr));