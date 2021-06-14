function LRU(cache_size, work_arr) {
    let memory = new Array(cache_size).fill(0);
    for (i = 0; i < work_arr.length; i++) {
        for (j = 0; j < memory.length; j++) {
            if (memory[j] == work_arr[i]) {
                memory.splice(j, 1);
                memory.unshift(work_arr[i]);
                if (memory.length == memory.length + 1) memory.pop();
                console.log('i:' + i, 'j:' + j, work_arr[i], memory, 'cachehit');
                break;
            }
            if (j == memory.length - 1) {
                memory.unshift(work_arr[i]);
                memory.pop();
                console.log('i:' + i, 'j:' + j, work_arr[i], memory, 'cachemiss');
            }
        }
    }
    return memory
}





cache_size = 5;
work_arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(LRU(cache_size, work_arr));