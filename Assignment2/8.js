// Sort String

let str = "abcmeAioDFKAKFJDfiamekdafaeJDSDLifkFADSFAaDFsAFdjfasdifzqkewjri12jfkaf8z01|]fas*&mzqpl";
function mergeStrays(s1, e1, s2, e2) {
    let i = s1, j = s2;
    let newStr = "";
    while (i <= e1) {
        if (j <= e2 && str[j] < str[i])
            newStr += str[j++];
        else
            newStr += str[i++];
    }
    while (j <= e2)
        newStr += str[j++];
    console.log(newStr);
    str = str.substring(0, s1) + newStr + str.substring(e2 + 1);
}

function mergeSort(s, e) {
    if (s >= e)
        return;
    let mid = Math.floor((s + e) / 2);
    mergeSort(s, mid);
    mergeSort(mid + 1, e);
    mergeStrays(s, mid, mid + 1, e);
}
mergeSort(0, str.length - 1);
console.log(str);