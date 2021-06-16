const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
    
    let indexPotion = this.potions.indexOf(oldName);
    this.potions.splice(indexPotion, 1, newName);
    
    return this.potions;
    // Change code above this line
  },
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));