function getShippingCost(country) {
  let message;
  // Change code below this line
  
    switch (country) {
        case 'China':
            delivery = 100;
            message = `Shipping to ${country} will cost ${delivery} credits`;
            break;
      
        case 'Chile':
            delivery = 250;
            message = `Shipping to ${country} will cost ${delivery} credits`;
            break;
        
        case 'Australia':
            delivery = 170;
            message = `Shipping to ${country} will cost ${delivery} credits`;
            break;
        
        case 'Jamaica':
            delivery = 120;
            message = `Shipping to ${country} will cost ${delivery} credits`;
            break;
      
        default:
            message = "Sorry, there is no delivery to your country";
    }

    console.log(message)
      
  // Change code above this line
  return message;
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");