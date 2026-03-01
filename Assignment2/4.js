let arr = [1, 4, 3, 35, 45, 3, 1, 541, 34, 32, 1, 4324, 23, 423, 1, 3, 42, 34, 12, 34, 235, 23, 4, 1];
function mergeArrays(s1, e1, s2, e2) {
    let i = s1, j = s2;
    let newarr = [];
    while (i <= e1) {
        if (j <= e2 && arr[j] < arr[i])
            newarr.push(arr[j++]);
        else
            newarr.push(arr[i++]);
    }
    while (j <= e2)
        newarr.push(arr[j++]);
    for (let k = s1; k <= e2; k++)
        arr[k] = newarr[k - s1];
}

function mergeSort(s, e) {
    if (s >= e)
        return;
    let mid = Math.floor((s + e) / 2);
    mergeSort(s, mid);
    mergeSort(mid + 1, e);
    mergeArrays(s, mid, mid + 1, e);
}

mergeSort(0, arr.length - 1);
console.log(arr);
