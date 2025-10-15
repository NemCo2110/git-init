/*
საშინაო დავალება: პროდუქტების ფილტრაციის სისტემა

მიზანი: შექმენით ონლაინ მაღაზიის პროდუქტების გვერდი, სადაც მომხმარებელს შეეძლება
პროდუქტების გაფილტვრა კატეგორიისა და ფასის მიხედვით. ეს დავალება მოითხოვს რამდენიმე
კლასის ურთიერთქმედებას და მასივებთან მუშაობას.
პირობა:
1 შექმენით Product კლასი შემდეგი თვისებებით: id, name, category, price, imageUrl.
2 შექმენით Store კლასი, რომელიც მართავს პროდუქტებს და მათ ჩვენებას:
◦ constructor: უნდა იღებდეს პროდუქტების მასივს.
◦ #products: პრივატული თვისება, სადაც შეინახება ყველა პროდუქტი.
◦ displayProducts(productsToDisplay): მეთოდი, რომელიც იღებს პროდუქტების
მასივს და ხატავს მათ HTML-ში (ქმნის ე.წ. "ბარათებს"). თუ პარამეტრი არ გადაეცა,
უნდა დახატოს ყველა პროდუქტი (this.#products).

◦ filterByCategory(category): მეთოდი, რომელიც ფილტრავს პროდუქტებს კატეგორიის
მიხედვით. თუ category არის "all", უნდა აჩვენოს ყველა პროდუქტი. გაფილტვრის
შემდეგ უნდა გამოიძახოს displayProducts შედეგის საჩვენებლად.
◦ filterByPrice(minPrice, maxPrice): მეთოდი, რომელიც ფილტრავს პროდუქტებს

ფასების დიაპაზონის მიხედვით და განაახლებს UI-ს.
*/

class Product {
    constructor(id , name , category , price , imageUrl){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}

class Store {

     #products 

    constructor(products) {
        this.#products = products;
    }
    

    displayProducts(productsToDisplay = this.#products){
        const container = document.getElementById("product-list");
        container.innerHTML = ""; // წავშალოთ ძველი პროდუქტის ბარათები

        productsToDisplay.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>კატეგორია: ${product.category}</p>
                <p>ფასი: ${product.price} ₾</p>`;
            container.appendChild(card);
             });
    }

    filterByCategory(category){
        if(category === "all"){
            this.displayProducts(this.#products);
        } else {
            const filtered = this.#products.filter(p => p.category === category);
            this.displayProducts(filtered);
        }
    }


    filterByPrice(minPrice, maxPrice){
        const filtered = this.#products.filter(p =>
            p.price >= minPrice && p.price <= maxPrice
        );
        this.displayProducts(filtered);
    }
}

// საწყისი მონაცემები
const productData = [
{ id: 1, name: 'სმარტფონი', category: 'electronics', price:1500, imageUrl: 'https://via.placeholder.com/150' },
{ id: 2, name: 'JavaScript-ის წიგნი', category: 'books', price:80, imageUrl: 'https://via.placeholder.com/150' },
{ id: 3, name: 'ყურსასმენები', category: 'electronics', price:250, imageUrl: 'https://via.placeholder.com/150' },
{ id: 4, name: 'მაისური', category: 'clothing', price: 50,imageUrl: 'https://via.placeholder.com/150' },
{ id: 5, name: 'ლეპტოპი', category: 'electronics', price:3200, imageUrl: 'https://via.placeholder.com/150' },
{ id: 6, name: 'ჯინსი', category: 'clothing', price: 120,imageUrl: 'https://via.placeholder.com/150' },
{ id: 7, name: 'OOP-ის ისტორია', category: 'books', price: 45,imageUrl: 'https://via.placeholder.com/150' }];

const products = productData.map(p => new Product(p.id, p.name, p.category, p.price, p.imageUrl));
const store = new Store(products)
store.displayProducts();

document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        store.filterByCategory(category);
    });
});


document.getElementById("price-filter-btn").addEventListener("click", () => {
    const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
    const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
    store.filterByPrice(minPrice, maxPrice);
});

// 1. გადააკეთეთ productData Product კლასის ინსტანსების მასივად.
// 2. შექმენით Store კლასის ინსტანსი ამ მასივით.
// 3. დაამატეთ event listener-ები კატეგორიის და ფასის ღილაკებზე, რომლებიც გამოიძახებენ Store-ის შესაბამის მეთოდებს.
// 4. თავდაპირველად, აჩვენეთ ყველა პროდუქტი.