class StringCalculator {
  add(value) {
    if (value === "") {
      return 0;
    }
    const numbers = value
      .replace(/(\r\n|\n|\r)/gm, ",") // Normalize delimiter
      .split(",") // Split values
      .map((n) => parseInt(n, 10)); // Convert to integers

    let negativeNumbers = "";

    numbers.forEach((n) => {
      if (n < 0) {
        negativeNumbers += " " + n;
      }
    });

    if (negativeNumbers) {
      throw new Error("negatives not allowed" + negativeNumbers);
    }

    return numbers.reduce((s, n) => s + n);
  }
}

module.exports = StringCalculator;
