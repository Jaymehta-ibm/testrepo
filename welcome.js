function divideNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Both inputs must be numbers.");
  }
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

function getUserName(user) {
  if (!user || typeof user.name !== 'string') {
    throw new Error("Invalid user object or name is not a string.");
  }
  return user.name.toUpperCase();
}

function processOrders(orders) {
  if (!Array.isArray(orders)) {
    throw new Error("Orders must be an array.");
  }
  return orders.reduce((total, order, index) => {
    if (!order || typeof order.price === 'undefined') {
      throw new Error(`Missing price at index ${index}`);
    }
    const price = parseFloat(order.price);
    if (isNaN(price)) {
      throw new Error(`Invalid price at index ${index}`);
    }
    return total + price;
  }, 0);
}

// Example usage
try {
  console.log("Result:", divideNumbers(10, 2));
} catch (error) {
  console.error("Error in divideNumbers:", error.message);
}

try {
  const user = { name: "John Doe" };
  console.log(getUserName(user));
} catch (error) {
  console.error("Error in getUserName:", error.message);
}

try {
  const orders = [
    { price: 100 },
    { price: "200" },
    { price: "invalid" }
  ];
  console.log(processOrders(orders));
} catch (error) {
  console.error("Error in processOrders:", error.message);
}
