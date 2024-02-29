class Transfer {
  constructor(userWhoTransfer, userWhoReceives, valueTransfer) {
    this.userWhoTransfer = userWhoTransfer;
    this.userWhoReceives = userWhoReceives;
    this.valueTransfer = valueTransfer;
    this.dateTransfer = new Date();
  }
}

module.exports = Transfer;
