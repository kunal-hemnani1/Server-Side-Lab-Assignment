const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum in nibh ac laoreet. Sed id quam tristique, cursus felis id, rutrum nulla. Pellentesque hendrerit massa ex, vitae pellentesque diam consequat vitae. Vestibulum sed tellus lorem. Vestibulum molestie ex fringilla mattis blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus mollis rutrum libero at condimentum. Donec ultricies dignissim magna, sed fringilla nisi pharetra a. Aliquam efficitur ac libero non venenatis. Morbi finibus odio ligula, in tincidunt nisl fermentum nec";
function splitString(str) {
    let prev = -1;
    const words = [];
    while (str.indexOf(" ", prev + 1) != -1) {
        const curr = str.indexOf(" ", prev + 1);
        words.push(str.substring(prev + 1, curr));
        prev = curr;
    }
    if (prev < str.length)
        words.push(str.substring(prev + 1));
    return words;
}

const words = splitString(str);
console.log(words);
console.log(str.split(" "));