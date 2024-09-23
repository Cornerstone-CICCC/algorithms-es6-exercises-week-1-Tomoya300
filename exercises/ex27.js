/*
Using the given object:

const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};

add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/

  const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    }, 
    result: function printAccountSummary() {
    console.log("Welcom!" + "\n" + `Your balance is currently ${savingsAccount.balance.toLocaleString("en-US", {style: "currency", currency: "USD"})} and your interest rate is ${savingsAccount.interestRatePercent}%.`)
    }, 
  };


  savingsAccount.deposit(500)
  savingsAccount.result()


