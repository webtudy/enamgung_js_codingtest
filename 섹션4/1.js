function sum_of_pos(arr) {
    let num_str = "";
    let sum = 0;
    let max = 0;
    let max_element = arr[0];
    for (element of arr) { //128
        num_str += String(element); //"128"
        for (k of num_str) { //"1" "2" "8"
            sum += Number(k); //1 3 11
        }
        if (sum == max) {
            if (element > max_element) {
                max_element = element;
            }
        }
        if (sum > max) {
            max = sum;
            max_element = element;
        }
        sum = 0;
        num_str = "";
    }
    return max_element;
}
arr = [379, 460, 603, 299, 379, 465, 123];
console.log(sum_of_pos(arr));