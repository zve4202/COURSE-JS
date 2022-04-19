const groceries = {
  "Orange Juice": {
    price: 1.5,
    discount: 10,
  },
  "Chocolate": {
    price: 2,
    discount: 0,
  },
  // more items...
};

const shoppingBag = [
   { product: "Chocolate", quantity: 3 },
   { product: "Orange Juice", quantity: 23 },
]
 
console.log('totalPrice', getTotalPriceOfShoppingBag(shoppingBag)); // Возвращает 37.05
console.log('totalPrice2', getTotalPriceOfShoppingBag2(shoppingBag)); // Возвращает 37.05

function getTotalPriceOfShoppingBag(basket = []) {
    if (basket.length === 0) {
        return 0;    
    }

    let total = 0;
    
    basket.forEach((bagItem) => {
      const { product, quantity } = bagItem;
      const { price, discount } = groceries[product];
      const discountPrice = price * (100 - discount) / 100;
      total += (quantity * discountPrice);
    });

    return total.toFixed(2);
}

function getTotalPriceOfShoppingBag2(basket = []) {
  if (basket.length === 0) {
    return 0;
  }

  const total = basket.reduce((acc, bagItem) => {
    const { product, quantity } = bagItem;
    const { price, discount } = groceries[product];
    const discountPrice = (price * (100 - discount)) / 100;
    return acc + quantity * discountPrice;
  }, 0);

  return total.toFixed(2);
}