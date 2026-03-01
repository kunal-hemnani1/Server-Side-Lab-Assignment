const url = "https://google.com/?search=helloworld&limit=12"

const parsedUrl = new URL(url);

console.log(parsedUrl.hostname);
console.log(parsedUrl.protocol);
console.log(parsedUrl.searchParams.get('limit'));
console.log(parsedUrl.port);