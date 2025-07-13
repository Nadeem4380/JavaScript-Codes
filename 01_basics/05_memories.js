// Stack(Primitive datatTypes) , Heap(Non-Primitive)

let myYoutubeName = "GamingueChunkeydotcom"

let anothername = myYoutubeName
anothername = "nadeemansari"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "nadeemansari@gmail.com",
    upi: "nadeem@ybl"
}

let userTwo = userOne

userTwo.email = "nadeem@google.com"
console.log(userOne.email);
console.log(userTwo.email);