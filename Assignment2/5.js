arr = [1, 312, 3, 45, 123, 4, 345, 12, 342, 5, 3, 4123, 4, 23, 5, 123];

function heapify(i, n) {
    const lnode = 2 * i + 1;
    const rnode = 2 * i + 2;
    let nxt = i;
    if (lnode < n && arr[nxt] < arr[lnode]) {
        nxt = lnode;
    }
    if (rnode < n && arr[nxt] < arr[rnode]) {
        nxt = rnode;
    }
    if (nxt != i) {
        [arr[i], arr[nxt]] = [arr[nxt], arr[i]];
        heapify(nxt, n);
    }
}


function heapSort() {
    let n = arr.length;
    for (let i = n - 1; i >= 0; i--) {
        heapify(i, n);
    }
    while (n > 1) {
        [arr[n - 1], arr[0]] = [arr[0], arr[n - 1]];
        n--;
        heapify(0, n);
    }
}

heapSort();
console.log(arr);