 /* 
დაწერეთ ფუნქცია, სახელად findMaxNumber, რომელიც იღებს რიცხვების მასივს და აბრუნებს ამ
მასივის უდიდეს რიცხვს. არ გამოიყენოთ ჩაშენებული Math.max() მეთოდი.
*/

function findMaxNumber (arr){
    let maxNumber = arr[0];

    for (let num of arr){
        if(num > maxNumber){maxNumber = num}
    }

    return maxNumber;
}

console.log(findMaxNumber([1, 5, 2, 9, 3]));

console.log(findMaxNumber([-10, -5, -2, -1]));

console.log(findMaxNumber([100]));

/*
დაწერეთ ფუნქცია, სახელად isPalindrome, რომელიც იღებს სტრიქონს და ამოწმებს, არის თუ
არა ის პალინდრომი.
*/

function isPalindrome(word){
    let chk = word.toLowerCase().trim();
    let lettersOnly = chk.replace(/[^a-zA-Z]/g, ''); //remove any symbols
    return lettersOnly === lettersOnly.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); //true.
console.log(isPalindrome("race a car")) //false.
console.log(isPalindrome("level")) //true.

/*
დაწერეთ ფუნქცია, სახელად findMissingNumber, რომელიც იღებს n-1 სიგრძის უნიკალური
რიცხვების მასივს.
*/

function findMissingNumber (arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }

    const n = arr.length + 1;

    const arithmeticSum = (n * (n+1)) / 2;

    const result = Math.abs(sum - arithmeticSum);

    return result;
}

console.log(findMissingNumber([3, 1, 4, 6, 2])) //5
console.log(findMissingNumber([1, 2, 3, 5])) //4
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1])) //8