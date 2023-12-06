export function sumNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  throw new Error("Só posso somar dois números");
}
