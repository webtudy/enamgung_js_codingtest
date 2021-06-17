function binary_search(arr, m) {
    let search = arr.sort((a, b) => a - b);
    console.log(search);
    let low = 0;
    let high = arr.length;
    let ans;

    while (low < high) {
        let middle_index = Math.floor(low + high / 2);
        if (m < search[middle_index]) {
            high -= 1;
        } else if (m > search[middle_index]) {
            low += 1;
        } else {
            ans = middle_index;
            break;
        }
    }

    return ans + 1;
}
arr = [23, 87, 65, 12, 57, 32, 99, 81];
m = 87;
console.log(binary_search(arr, m));