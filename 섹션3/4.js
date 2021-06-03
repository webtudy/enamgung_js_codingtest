function dest(s, t) {
    let dest_arr = [];
    let flag = 0;
    for (i in s) {
        if (s[i] !== t) flag++;
        else flag = 0;
        dest_arr[i] = flag;

    }
    flag = 0;
    console.log(dest_arr);
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] !== t) flag++;
        else flag = 0;
        if (dest_arr[i] > flag) dest_arr[i] = flag;

    }
    return dest_arr;
}

str = "teachermode";
t = "e"

console.log(dest(str, t));