class Storage {
  #items;
  
  constructor(items) {
    this.#items = items;
  };
  
  getItems() {
  return this.#items;
  };
  
  addItem(newItem) {
  return this.#items.push(newItem);
  };
  
  removeItem(item) {
  const itemIndex = this.#items.indexOf(item);
  this.#items.splice(itemIndex, 1);
  };
};

// Пиши код выше этой строки

const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(Storage.prototype.hasOwnProperty('getItems'));
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
