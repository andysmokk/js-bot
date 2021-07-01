const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  
  // Change code below this line
  getPotions() {
    const { potions } = atTheOldToad;
    return potions;
  },
  
  addPotion(potionName) {
    const { potions } = atTheOldToad;
    for (let potion of potions) {
      if (potion.name === potionName.name) {
        return `Potion ${potionName.name} is already equipped!`;
      }
    }
    potions.push(potionName);
    return potions;
  },
  
  removePotion(potionName) {
    const { potions } = atTheOldToad;
    for (let potion of potions) {
      if (potion.name === potionName) {
        const potionIndex = potions.indexOf(potion);
        potions.splice(potionIndex, 1);
        return potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  
  updatePotionName(oldName, newName) {
    const { potions } = atTheOldToad;
    for (let potion of potions) {
      if (potion.name === oldName) {
        potion.name = newName
        return potions;
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