function findPivot(s, e, arr) {
    let pvte = arr[s];
    let pos = s;
    for (let i = s; i <= e; i++)
        pos += arr[i] < pvte;
    arr[s] = arr[pos];
    arr[pos] = pvte;
    let i = s, j = e;
    while (i < pos) {
        while (i < pos && arr[i] < arr[pos]) {
            i++;
        }
        while (j > pos && arr[pos] <= arr[j]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return pos;
}

function QuickSort(s, e, arr) {
    if (s >= e)
        return;
    let pvtidx = findPivot(s, e, arr);
    QuickSort(s, pvtidx, arr);
    QuickSort(pvtidx + 1, e, arr);
}
arr = [1, 4, 35, 1, 3, 13, 4, 35, 3, 21, 4123, 5, 1235, 435, 23, 123, 4, 1234, 231, 5, 23, 51];
QuickSort(0, arr.length - 1, arr);
console.log(arr);