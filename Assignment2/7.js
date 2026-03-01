//BubbleSort
let arr = [323, 34, 23, 13, 1, 3, 4, 15, 3, 4, 123, 4, 11, 51, 3, 4, 3, 41];
const n = arr.length;

function BubbleSort() {
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
BubbleSort();
console.log(arr);