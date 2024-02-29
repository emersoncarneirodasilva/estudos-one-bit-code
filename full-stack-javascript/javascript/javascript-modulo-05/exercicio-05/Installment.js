class Installment {
  constructor(installmentValue, numberOfInstallments, paid = false) {
    this.installmentValue = installmentValue;
    this.numberOfInstallments = numberOfInstallments;
    this.paid = paid;
  }
}

module.exports = Installment;
