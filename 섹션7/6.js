function find_H(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
            console.log(arr[i], arr[i + 1], arr[i + 2]);
            H = (i + 1) + 1;
            console.log(H);
            return H;
        }
    }
    for (i = 0; i < arr.length; i++) {

        if ((arr[i] < arr[i + 1] || arr[i] <= arr[i + 1]) &&
            (arr[i + 1] > arr[i + 2] || arr[i + 1] >= arr[i + 2])) {
            console.log(arr[i], arr[i + 1], arr[i + 2]);
            H = (i + 1) + 1;
            console.log(H);
            break;
        }
    }


    return H;
}

function find_F(arr) {
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1] && arr[i + 1] < arr[i + 2]) {
            console.log(arr[i], arr[i + 1], arr[i + 2]);
            friend = (i + 1) + 1 + 1;
            console.log(friend);
            return friend;
        }
    }
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] > arr[i + 1] || arr[i] >= arr[i + 1]) &&
            (arr[i + 1] < arr[i + 2] || arr[i + 1] <= arr[i + 2])) {
            console.log(arr[i], arr[i + 1], arr[i + 2]);
            friend = (i + 1) + 1 + 1;
            console.log(friend);
            break;
        }
    }
    return friend;
}

function naughty_H(arr) {
    let H = 0;
    let friend = 0;
    console.log(arr);
    H = find_H(arr);
    friend = find_F(arr);
    return [H, friend];
}
arr = [120, 130, 150, 150, 130, 150];
console.log(naughty_H(arr));