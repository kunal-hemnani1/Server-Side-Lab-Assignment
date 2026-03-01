// Insertion sort

arr = [1, 2532, 343, 3, 1, 4, 32, 513, 2, 54, 213, 4, 3, 1, 5, 32, 1, 532]
const n = arr.length;

function insertionSort() {
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j];
            arr[j] = key;
        }
    }
}
insertionSort();
console.log(arr);