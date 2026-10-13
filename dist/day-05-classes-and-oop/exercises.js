"use strict";
/**
 * =====================================================================
 * Day 5: Classes and Object-Oriented Programming (OOP)
 * =====================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--- Day 5: Classes & OOP ---");
// 2. Base Abstract Class
class Account {
    accountNumber;
    holderName;
    _balance;
    constructor(accountNumber, holderName, _balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this._balance = _balance;
    }
    // Getter
    get balance() {
        return this._balance;
    }
    // Method
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this._balance += amount;
    }
}
// 3. Derived Class
class SavingsAccount extends Account {
    interestRate;
    constructor(accountNumber, holderName, initialDeposit, interestRate) {
        super(accountNumber, holderName, initialDeposit);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate;
    }
}
const myAccount = new SavingsAccount("ACC-9988", "Sachintha", 5000, 0.05);
myAccount.deposit(1000);
console.log(`Account Balance: $${myAccount.balance}`);
console.log(`Annual Interest: $${myAccount.calculateInterest()}`);
// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Implement a `Vehicle` abstract class with a `startEngine()` abstract method.
// Exercise 2: Create a `Car` subclass implementing an `Auditable` interface.
// Exercise 3: Add a `withdraw(amount: number)` method with balance validation.
