function isRegex(value) {
    return value instanceof RegExp;
}

console.log(isRegex(/hel*lo/))
console.log(isRegex("dhjj"));