//დავალება 1: წიგნის ობიექტი

let book = {
    title : "მე, ბებია, ილიკო და ილარიონი",
    author : "ნოდარ დუმბაძე",
    yearPublished : 1960,
    genres : ["კომედია","რომანი"],


    getSummary : function () {
        return `[${this.title}] დაიწერა ${this.author}-ს მიერ ${this.yearPublished} წელს.`;
    }
}

console.log(book.getSummary());
book.yearPublished = 1961;
console.log(book.getSummary());

//დავალება 2: ბანკის ანგარიშის ობიექტი

let bankAccount = {
    ownerName : "Giorgi Nemsadze",
    balance : 200,

    deposit : function (amount) {
        this.balance += amount;  
        return this.balance;
    },

    withdraw : function (amount) {
           if (this.balance >= amount) {
            this.balance -= amount;  
            return this.balance;
        } else {
            return "არასაკმარისი ბალანსი!";
        }
    }
}
bankAccount.deposit(2000);
console.log(bankAccount.balance);
bankAccount.withdraw(500);
console.log(bankAccount.balance);
bankAccount.withdraw(5000);
console.log(bankAccount.withdraw(5000), bankAccount.balance);