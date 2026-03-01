
const v = undefined;
const f = null;
const x = [];

function isNull(a) {
    return a === null;
}

console.log(isNull(f));
console.log(isNull(v));
console.log(isNull(x));