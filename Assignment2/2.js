let arr = [1, 2, 4, 3, 2, 3, 4, 3, 2, 34, 3, 4, 3, 4, 3, 43, 3, 343];
let target = 43;
let found = false;
for (let i in arr) {
    if (arr[i] == target) {
        console.log("found on index ", i);
        found = true;
        break;
    }

}
if (!found)
    console.log("not found");