const arr1 = [1, 2, 3, 14, , 43, 3, 4, 231, 5, 2];
const arr2 = [1, 2, 5, 6, 7, 8, 10, 10, 12, 35, 46, 74, 123, 421];

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i])
            return false;
    }
    return true;
}

console.log(isSorted(arr1));
console.log(isSorted(arr2));