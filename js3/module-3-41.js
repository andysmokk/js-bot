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

    for (let obj in this.potions) {
      

      if (obj.includes(potionName.name)) {
        return `Potion ${potionName} is already equipped!`;
      }
    }
    this.potions.push(potionName);
    return this.potions;
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
        potion.name = newName;
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));