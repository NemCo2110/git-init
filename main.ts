interface HasId {
  id: number;
}

class DataStore<T extends HasId> {
  private data: T[] = [];


  add(item: T): void {
    this.data.push(item);
  }


  getItem(id: number): T | undefined {
    return this.data.find(x => x.id === id);
  }


  update(id: number, changes: Partial<T>): T | undefined {
    const index = this.data.findIndex(x => x.id === id);
    if (index === -1) return undefined;


    const updated: T = { ...this.data[index], ...changes };
    this.data[index] = updated;
    return updated;
  }


  getAll(): readonly T[] {
    return this.data;
  }
}


interface User extends HasId {
  name: string;
  age: number;
  isActive: boolean;
}


interface Product extends HasId {
  name: string;
  price: number;
}

const userStore = new DataStore<User>();
const productStore = new DataStore<Product>();

userStore.add({ id: 1, name: "Giorgi", age: 21, isActive: true });
userStore.add({ id: 2, name: "Lizi", age: 18, isActive: true });

userStore.update(1, { isActive: false, age: 31 });

console.log("user#1 after update:", userStore.getItem(1));

productStore.add({ id: 1, name: "Mechanical Keyboard", price: 129.99 });

productStore.update(1, { age: 10 }); //error

productStore.update(1, { price: 119.99 });

console.log("all users:", userStore.getAll());
console.log("all products:", productStore.getAll());
