/*ამოცანა 1: პალინდრომის შემოწმება (ალგორითმი)

პირობა: დაწერეთ ფუნქცია isPalindrome(word), რომელიც ამოწმებს, არის თუ არა სიტყვა
პალინდრომი. პალინდრომია სიტყვა, რომელიც მარჯვნიდან და მარცხნიდან ერთნაირად იკითხება
(მაგ. "level", "madam", "racecar"). ფუნქციამ უნდა დააბრუნოს true ან false.
• შემოწმება არ უნდა იყოს დამოკიდებული დიდ და პატარა ასოებზე (Case-insensitive), ანუ "Level"
პალინდრომად უნდა ჩაითვალოს.
მინიშნება: ყველაზე მარტივი გზაა, შექმნათ სიტყვის შებრუნებული ვერსია და შეადაროთ ორიგინალს.
*/

function isPalindrome(word){
    chk = word.toLowerCase().trim();
    return chk === chk.split('').reverse().join('');
}

console.log(isPalindrome('palindrome')); // false
console.log(isPalindrome('madam')); // true

/*
ამოცანა 2: კალათის ჯამური ღირებულება (მონაცემთა დამუშავება)

პირობა: წარმოიდგინეთ, რომ გაქვთ პროდუქტების მასივი ონლაინ მაღაზიისთვის. თითოეული
პროდუქტი არის ობიექტი, რომელსაც აქვს სახელი, ფასი და მარაგში არსებობის სტატუსი
(inStock). დაწერეთ ფუნქცია calculateTotal(cart), რომელიც იღებს ასეთ მასივს და
აბრუნებს მხოლოდ იმ პროდუქტების ჯამურ ღირებულებას, რომლებიც მარაგშია (inStock:
true).
*/

function calculateTotal(cart){
    let total = 0;
    cart.forEach(element => {
        if (element.inStock === true){
            total += element.price;
        }
    });
    return total;
}

let firstCart = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Headphones', price: 150, inStock: false },
  { name: 'Mouse', price: 40, inStock: true },
  { name: 'Keyboard', price: 80, inStock: true },
  { name: 'Monitor', price: 300, inStock: false }
];
console.log(calculateTotal(firstCart)); //1320


/*
ამოცანა 3: ვარსკვლავების პირამიდა (რთული/ბონუს ამოცანა)

პირობა: დაწერეთ ფუნქცია drawPyramid(height), რომელიც იღებს რიცხვს (პირამიდის
სიმაღლეს) და console.log-ის მეშვეობით ხატავს ვარსკვლავების (*) პირამიდას.
მინიშნება: დაგჭირდებათ ჩალაგებული (nested) for ციკლები. გარე ციკლი პასუხისმგებელი იქნება
სტრიქონების რაოდენობაზე (სიმაღლეზე), ხოლო შიდა ციკლი — თითოეულ სტრიქონში
ვარსკვლავების რაოდენობაზე.
*/

function drawPyramid(height){
  for (let i = 1; i <= height; i++) {
    let spaces = " ".repeat(height - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars + spaces);
  }
}

drawPyramid(5);