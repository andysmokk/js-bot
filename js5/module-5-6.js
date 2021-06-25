function Storage(items) {
    this.items = items;
};

Storage.prototype.getItems = function() {
    return this.items;
};

Storage.prototype.addItem = function(newItem) {
    return this.items.push(newItem);
};

Storage.prototype.removeItem = function(item) {
    let index = this.items.indexOf(item);
    return this.items.splice(index, 1);
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]