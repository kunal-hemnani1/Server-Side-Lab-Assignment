
function toLowerCase(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (65 <= c && c <= 91)
            newstr += String.fromCharCode(c + 32);
        else
            newstr += (str[i]);
    }
    return newstr;
}

function toUpperCase(str) {
    let newstr = "";
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (97 <= c && c <= 123)
            newstr += String.fromCharCode(c - 32);
        else
            newstr += str[i];
    }
    return newstr;

}

console.log(toLowerCase("DJLJjdaSJLZDJLJ"));
console.log(toUpperCase("fdjalJSLKszdlfalLF"));