const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  addPotion(potionName) {
    // Change code below this line
    
    this.potions.push(potionName);
    
    return this.potions;
    // Change code above this line
  },
};

console.log(atTheOldToad.addPotion('Invisibility'));
console.log(atTheOldToad.addPotion('Power potion'));