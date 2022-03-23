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

    var sum = numbers.reduce((acc, num) => {
      if (num < 0) {
        negativeNumbers += " " + num;
      }

      return acc + num;
    }, 0);

    if (negativeNumbers) {
      throw new Error("negatives not allowed" + negativeNumbers);
    }

    return sum;
  }
}

module.exports = StringCalculator;
