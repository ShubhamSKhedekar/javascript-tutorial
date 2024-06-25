//iterate object using for in loop - which returns object keys one by one
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(programming[key]);
}

//map only has unique keys
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//does not work
for (const key in map) {
    console.log(key);
}

//does work
for (const element of map) {
    console.log(key);
}