str = "foo bar foo bar foo bar foo foo bar";
word = "foo";
let w = str.indexOf(word);
indexes = [];
while (w != -1) {
    indexes.push(w);
    w = str.indexOf(word, w + 1);
}
console.log(indexes);
