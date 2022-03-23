class StringCalculator {
  add(value) {
    if (value === "") {
      return 0;
    }
    const numbers = value
      .replace(/(\r\n|\n|\r)/gm, ",") // Normalize delimiter
      .split(",") // Split values
      .map((n) => parseInt(n, 10)); // Convert to integers

    return numbers.reduce((s, n) => s + n);
  }
}

module.exports = StringCalculator;
