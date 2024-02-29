const Installment = require("./Installment");

class Loan {
  static #fee = 1.05;

  constructor(loanValue, installments) {
    this.loanValue = loanValue;
    this.loanDate = new Date();
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((loanValue * Loan.#fee) / installments, i)
      );
    }
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + newFeePercentage / 100;
  }
}

module.exports = Loan;
