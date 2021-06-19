const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  
  removePotion(potionName) {
    for (let potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));