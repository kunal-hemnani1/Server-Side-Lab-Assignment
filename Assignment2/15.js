
function displayCurrentTime() {
    const t = new Date;
    console.log(t.toLocaleTimeString(undefined, { hour12: false }));
}

setInterval(() => {
    displayCurrentTime();
}, [1000]);