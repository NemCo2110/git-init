//ამოცანა 1.1: დუბლიკატების პოვნა

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];
console.log(findDuplicates(numbers)); 

//ამოცანა 1.2: საერთო ინტერესები

function findCommonBooks(user1Books, user2Books) {
    
    set1 = new Set()
    set2 = new Set();

    user1Books.forEach(element => {
        set1.add(element)
    });
    
        user2Books.forEach(element => {
        set2.add(element)
    });

    const intersection = new Set([...set1].filter(x => set2.has(x)));
    return(intersection)
}

const user1 = ["The Hobbit", "1984", "Brave New World","Fahrenheit 451"];
const user2 = ["1984", "To Kill a Mockingbird", "The Hobbit", "The Great Gatsby"];

console.log(findCommonBooks(user1,user2));

//ამოცანა 2.1: ასოების სიხშირის დათვლა

function countLetters(str){
    const lowerStr = str.toLowerCase();
    const lettersMap = new Map();
    
    for (const char of lowerStr) {
        if (lettersMap.has(char)) {
            lettersMap.set(char, lettersMap.get(char) + 1);
        } else {
            lettersMap.set(char, 1);
        }
    }

    return lettersMap;
}

const result = countLetters("Hello World");

for (const [char, count] of result) {
    console.log(`'${char}' => ${count}`);
}

//ამოცანა 2.2: მონაცემთა სტრუქტურის შებრუნება

function groupByProfession(obj) {
    const groupedMap = new Map();
    for (const [name, profession] of Object.entries(obj)) {
        if (groupedMap.has(profession)) {
            groupedMap.get(profession).push(name);
        } else {
            groupedMap.set(profession, [name]);
        }
    }

    return groupedMap;
}

const people = {
Alice : "Developer",
Bob : "Designer",
Charlie : "Developer",
David : "Manager",
Eve : "Designer"
};

const res = groupByProfession(people);
for (const [job, name] of res) {
    console.log(`'${job}' => ${name}`);
}

/*
ამოცანა 3.1: კონცეპტუალური კითხვა (წერილობითი პასუხი)

წარმოიდგინეთ, რომ ქმნით ვებ აპლიკაციას, სადაც მომხმარებლებს შეუძლიათ DOM ელემენტებზე
(მაგ. ღილაკებზე) დაკლიკებით დაამატონ ისინი "რჩეულების" სიაში. თქვენ გჭირდებათ მონაცემთა
სტრუქტურა, სადაც შეინახავთ ამ "რჩეულ" DOM ელემენტებს.
1 რომელ მონაცემთა სტრუქტურას გამოიყენებდით, Set-ს თუ WeakSet-ს?
2 ახსენით თქვენი არჩევანი. რა მოხდება, თუ DOM ელემენტი გვერდიდან წაიშლება და თქვენ მას
ჩვეულებრივ Set-ში ინახავდით? რა უპირატესობა აქვს თქვენს მიერ არჩეულ სტრუქტურას ამ
სცენარში?

*/

/* 
პასუხი:

ასეთ შემთხვევაში უმჯობესია WeakSet ის გამოყენება, რადგან set-ისგან განსხვავებით
საშუალებას აძლევს garbage collector-ს, რომ დაურეფერენსებელი ობიექტები გაასუფთაოს
და მეხსიერება გაათავისუფლოს
*/

//ამოცანა 3.2: ქეშირების ფუნქციის შექმნა


function complexCalculation(obj) {
  console.log("...რთული გამოთვლა სრულდება...");
  return obj.value * 2;
}

function cacheFunction (fn) {
    const cache = new WeakMap();
    
    return function (obj) {
    
    if (cache.has(obj)) {
      return cache.get(obj);
    }

    const result = fn(obj);

    cache.set(obj, result);

    return result;
  };
}

const cachedCalculation = cacheFunction(complexCalculation);

let myObject = { value: 10 };

console.log(cachedCalculation(myObject));

console.log(cachedCalculation(myObject));

myObject = null;