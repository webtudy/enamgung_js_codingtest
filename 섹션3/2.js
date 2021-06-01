function palindrome(str) {
    let N_str = "";
    let ret = "YES";
    n = str.length;
    for (i in str) {
        N_str += str[i].toUpperCase();
    }
    for (i in N_str) {
        if (N_str[i] >= 'A' && N_str[i] <= "Z") {
            if (N_str[i] == N_str[n - i - 1]) continue;
            else {
                ret = "NO";
                break;
            }
        }


    }
    return ret;
}
str = "found7, time: study; Yduts; emit, 7DnuoF";
console.log(palindrome(str));