function divideNumbers(a, b) {
  return a / b;
}

function getUserName(user) {
  return user.name.toUpperCase();
}

function processOrders(orders) {
  let total = 0;

  for (let i = 0; i < orders.length; i++) {
    total += orders[i].price;
  }

  return total;
}

const result = divideNumbers(90, 0);
console.log("Final datas Resultsss::::::::", result);

const user = null;
console.log(getUserName(user));

const orders = [
  { price: 100 },
  { price: "200" }, // Mixed types
  { }
];

console.log(processOrders(orders));
