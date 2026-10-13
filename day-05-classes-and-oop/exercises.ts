/**
 * =====================================================================
 * Day 5: Classes and Object-Oriented Programming (OOP)
 * =====================================================================
 */

console.log("--- Day 5: Classes & OOP ---");

// 1. Interface contract
interface Repository<T> {
  save(item: T): void;
  getAll(): T[];
}

// 2. Base Abstract Class
abstract class Account {
  constructor(
    public readonly accountNumber: string,
    protected holderName: string,
    private _balance: number
  ) {}

  // Getter
  get balance(): number {
    return this._balance;
  }

  // Method
  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
  }

  // Abstract method child classes must implement
  abstract calculateInterest(): number;
}

// 3. Derived Class
class SavingsAccount extends Account {
  private interestRate: number;

  constructor(accountNumber: string, holderName: string, initialDeposit: number, interestRate: number) {
    super(accountNumber, holderName, initialDeposit);
    this.interestRate = interestRate;
  }

  calculateInterest(): number {
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
