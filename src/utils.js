export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") throw new TypeError("Numbers only");
  return a + b;
}

export function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") throw new TypeError("Numbers only");
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

export function capitalize(str) {
  if (typeof str !== "string") throw new TypeError("String only");
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}