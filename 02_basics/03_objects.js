//singleton
// Object.create
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nadeem",
    "full name": "Nadeem Ansari",
    [mySym]: "mykey1",
    age: 18,
    location: "Ranchi",
    email: "nadeem@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof(JsUser[mySym]))

JsUser.email = "nadeem@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nadeem1@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());