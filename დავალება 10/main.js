const username = "chemisasurvelimomxmareblissaxeli";
const hasSubscription = true;
const age = 21;
const isAdult = age >= 18 ? true : false;
let score = 500;

console.log(`User: ${username}, Subscribed: ${hasSubscription}, Age: ${age}, Score: ${score}`);


score += 150;
console.log(score);

score -= '20';
console.log(score, typeof(score));

console.log(score > 600);

console.log(score == 630);
console.log(score === 630);

let canAccessContent;

if (hasSubscription === true && isAdult === true) {
    canAccessContent = true;
}
else {
    canAccessContent = false;
}

console.log(canAccessContent);

console.log(`მომხმარებელი ${username} არის ${age} წლის და აქვს გამოწერა. მას შეუძლია კონტენტზე წვდომა ${canAccessContent}.`)