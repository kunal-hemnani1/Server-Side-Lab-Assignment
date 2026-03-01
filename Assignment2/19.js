
function timeConvert(m) {
    const h = Math.floor(m / 60), rm = m % 60;
    return `${m} minutes = ${h} hour(s) and ${rm} minute(s)`;
}

console.log(timeConvert(200));