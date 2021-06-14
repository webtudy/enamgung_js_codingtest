function count_people(start, end, arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] <= start && arr[i][1] >= end) count++;
    }
    return count;
}

function find_end(start, arr) {
    let end = 72;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] < end && arr[i][0] > start) end = arr[i][0];
    }
    return end;
}

function wedding(arr) {
    let max_people = 0;
    let end, cnt;
    let minRow = arr.map(function(row) { return Math.min.apply(Math, row); });
    let min = Math.min.apply(null, minRow);
    let start = min;
    console.log(arr, start);

    for (let i = 0; i < arr.length; i++) {
        end = find_end(start, arr);
        cnt = count_people(start, end, arr);
        if (cnt > max_people) {
            max_people = cnt;
        }
        start = end;
    }
    return max_people;
}

let arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14]
];

console.log(wedding(arr));