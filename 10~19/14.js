function most_long_str(str) {
    let longest = ""
    for (x of str) {
        if (x.length > longest.length) longest = x;
    }

    return longest;
}

str = ["5", "teacher", "time", "student", "beautiful", "gooddddddddd"];
console.log(most_long_str(str));