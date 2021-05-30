function show_student(str) {
    let ret = 1;
    let max = str[0];
    for (i in str) {
        if (str[i] > max) {
            ret += 1;
            max = str[i];
        }
    }
    return ret;
}

arr = [130, 135, 148, 154, 140, 145, 150, 150, 153, 160]
console.log(show_student(arr));