function processArray(data, filterCallback, mapCallback) {
    return data.filter(filterCallback).map(mapCallback);
}

function filterCallback(user) {
    return user.isActive && user.age >= 18;
}


function mapCallback(user) {
    return `მომხმარებელი : ${user.name}`;
}


const users = [
    { id: 1, name: "George", age: 25, isActive: true },
    { id: 2, name: "Anna", age: 17, isActive: false },
    { id: 3, name: "Luka", age: 28, isActive: true },
    { id: 4, name: "Maria", age: 16, isActive: true },
    { id: 5, name: "Sandro", age: 35, isActive: false },
];

const res = processArray(users, filterCallback, mapCallback);

console.log(res);

