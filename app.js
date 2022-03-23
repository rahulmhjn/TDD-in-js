class StringCalculator {
  add(value) {
    if (value === "") {
      return 0;
    }
    const numbers = value
      .replace(/(\r\n|\n|\r)/gm, ",") // Normalize delimiter
      .split(",") // Split values
      .map((n) => parseInt(n, 10)); // Convert to integers

    if (numbers.some((n) => n < 0)) throw new Error("negatives not allowed");

    return numbers.reduce((s, n) => s + n);
  }
}

module.exports = StringCalculator;
