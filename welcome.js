function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function getUserName(user) {
  if (!user || !user.name) {
    throw new Error("Invalid user object.");
  }
  return user.name.toUpperCase();
}

function processOrders(orders) {
  return orders.reduce((total, order, index) => {
    const price = parseFloat(order.price);
    if (isNaN(price)) {
      throw new Error(`Invalid price at index ${index}`);
    }
    return total + price;
  }, 0);
}

try {
  const result = divideNumbers(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error in divideNumbers:", error.message);
}

try {
  const user = null;
  console.log(getUserName(user));
} catch (error) {
  console.error("Error in getUserName:", error.message);
}

try {
  const orders = [
    { price: 100 },
    { price: "200" },
    {}
  ];
  console.log(processOrders(orders));
} catch (error) {
  console.error("Error in processOrders:", error.message);
}
