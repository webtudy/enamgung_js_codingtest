function prince(p_n, out) {
    let queue = Array.from({ length: p_n }, (v, i) => i + 1);
    while (queue.length) {
        for (i = 1; i < out; i++) queue.push(queue.shift());
        queue.shift();
        if (queue.length == 1) return queue.shift();
    }
}
p_n = 8;
out = 3;
console.log(prince(8, 3));