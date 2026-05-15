/**
 * Divides two finite numbers safely.
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number}
 * @throws {Error} If inputs are invalid or denominator is zero
 */
function divideNumbers(a, b) {
  if (
    typeof a !== 'number' ||
    typeof b !== 'number' ||
    Number.isNaN(a) ||
    Number.isNaN(b) ||
    !Number.isFinite(a) ||
    !Number.isFinite(b)
  ) {
    throw new Error("Inputs must be valid finite numbers.");
  }

  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}

/**
 * Returns the uppercase version of a valid user name.
 * @param {Object} user - User object
 * @returns {string}
 * @throws {Error} If user object or name is invalid
 */
function getUserName(user) {
  if (
    !user ||
    typeof user !== 'object' ||
    user.name == null ||
    typeof user.name !== 'string' ||
    user.name.trim() === ''
  ) {
    throw new Error(
      "User object is invalid or name is not a valid non-empty string."
    );
  }

  return user.name.trim().toUpperCase();
}

/**
 * Calculates total order amount safely.
 * @param {Array} orders - List of order objects
 * @returns {number}
 * @throws {Error} If orders contain invalid price values
 */
function processOrders(orders) {
  if (!Array.isArray(orders)) {
    throw new Error("Orders must be an array.");
  }

  if (orders.length === 0) {
    throw new Error("Orders array cannot be empty.");
  }

  return orders.reduce((total, order, index) => {
    if (
      !order ||
      typeof order !== 'object' ||
      !Object.prototype.hasOwnProperty.call(order, 'price')
    ) {
      throw new Error(`Invalid order at index ${index}`);
    }

    if (
      typeof order.price === 'string' &&
      !/^\d+(\.\d+)?$/.test(order.price.trim())
    ) {
      throw new Error(
        `Invalid price format '${order.price}' at index ${index}`
      );
    }

    const price = Number(order.price);

    if (!Number.isFinite(price) || price < 0) {
      throw new Error(
        `Invalid price '${order.price}' at index ${index}`
      );
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
  // Valid order examples
  const orders = [
    { price: 100 },
    { price: "200" },
    { price: 50.5 }
  ];

  console.log("Total:", processOrders(orders));
} catch (error) {
  console.error("Error in processOrders:", error.message);
}
