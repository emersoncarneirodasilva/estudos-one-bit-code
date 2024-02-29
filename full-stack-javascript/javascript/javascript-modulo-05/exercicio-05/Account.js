class Account {
  #balance;

  constructor(user) {
    this.owner = user;
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }

  get balance() {
    return this.#balance;
  }

  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  addLoan(loan) {
    this.#balance += loan.loanValue;
    this.loans.push(loan);
  }

  addTransfer(transfer) {
    if (transfer.userWhoTransfer.email === this.owner.email) {
      this.#balance += transfer.valueTransfer;
      this.transfers.push(transfer);
    } else if (transfer.userWhoReceives.email === this.owner.email) {
      this.#balance -= transfer.valueTransfer;
      this.transfers.push(transfer);
    }
  }
}

module.exports = Account;
