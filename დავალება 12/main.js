// 1 სიტყვების კაპიტალიზაცია (String):

function capitalizeWords(sentence) {
    let properSentence = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1));;
    return properSentence.join(' ');
}

console.log(capitalizeWords("hello world from javascript"));

// 2 მომხმარებლების ფილტრაცია და ტრანსფორმაცია (Array):

const users = [
 { id: 1, name: "George", age: 25, isActive: true },
 { id: 2, name: "Anna", age: 17, isActive: false },
 { id: 3, name: "Luka", age: 28, isActive: true },
 { id: 4, name: "Maria", age: 16, isActive: true },
 { id: 5, name: "Sandro", age: 35, isActive: false },
 ];

 usersNew = users.filter(us => us.isActive === true && us.age >= 18);
 res = usersNew.map(us => us.name);
 console.log(res);