const name = "Nadeem"
const repoCount = 50
// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Deft-hc-ansari')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = gameName.substring(0, 2);
console.log(newString);

const anotherString = gameName.slice(-3,4);
console.log(anotherString);

const newStringOne = "      Nadeem     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nadeem.com/nadeem%20ansari"

console.log(url.replace('%20', '-'))

console.log(url.includes('nadeem'))

console.group(gameName.split('-'));