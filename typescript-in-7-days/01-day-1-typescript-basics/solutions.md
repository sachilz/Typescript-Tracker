# Solutions — Day 1: TypeScript Basics

Here are the complete solutions and explanations for the Day 1 exercises.

---

## Exercise 1: Personal Information

```ts
const myName: string = "Sachintha";
const myAge: number = 24;
const myCountry: string = "Sri Lanka";

console.log(`Hello, my name is ${myName}. I am ${myAge} years old and I live in ${myCountry}.`);
```

### Key Points:
- We use `const` because personal static info does not need reassignment here.
- Explicit type annotations (`: string`, `: number`) guarantee the variable values remain valid.

---

## Exercise 2: Student Details & Status Update

```ts
const studentId: number = 1001;
const studentName: string = "Sarah Connor";
let isEnrolled: boolean = true;

console.log(`Initial Status -> Student: ${studentName} (ID: ${studentId}), Active: ${isEnrolled}`);

// Update status to false
isEnrolled = false;

console.log(`Updated Status -> Student: ${studentName} (ID: ${studentId}), Active: ${isEnrolled}`);
```

### Key Points:
- `isEnrolled` is declared with `let` because we need to reassign it.
- Trying to reassign `isEnrolled = "inactive"` will trigger an immediate compiler error because `"inactive"` is a `string`, not a `boolean`.

---

## Exercise 3: Sum of Two Numbers

```ts
const num1: number = 42;
const num2: number = 58;
const sum: number = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
```

### Key Points:
- The expression `num1 + num2` produces a `number`, which matches the `: number` annotation for `sum`.

---

## Exercise 4: Bank Account Balance (`let` vs `const`)

```ts
const accountHolder: string = "David Miller";
const accountNumber: string = "ACCT-789012";
let balance: number = 1200;

console.log(`Welcome, ${accountHolder} (${accountNumber}). Current balance: $${balance}`);

const deposit: number = 350;
balance += deposit;

console.log(`Deposited $${deposit}. Updated balance: $${balance}`);
```

### Key Points:
- Constant identifiers (account holder name, account number) cannot be accidentally overwritten.
- `balance` is mutable and changes predictably using the `+=` operator.

---

## Exercise 5: Debugging Challenge

### Original Buggy Code:
```ts
const totalMarks: number = 500;
totalMarks = 550; // ❌ Cannot reassign a constant

let candidate: string = 101; // ❌ 101 is a number, not a string

let isPassed: boolean = "yes"; // ❌ "yes" is a string, not a boolean
```

### Fixed Code:
```ts
// Fix 1: Change const to let to allow reassignment
let totalMarks: number = 500;
totalMarks = 550;

// Fix 2: Provide a string value or change type annotation
let candidate: string = "101";

// Fix 3: Assign a boolean (true / false) instead of a string
let isPassed: boolean = true;

console.log(`Candidate: ${candidate}, Total Marks: ${totalMarks}, Passed: ${isPassed}`);
```

### What Went Wrong & Why:
1. `const` prevents re-binding. If a variable needs to change its value, declare it with `let`.
2. TypeScript enforces strict type checking: a numeric literal `101` cannot be stored in a `string` variable without quotes `"101"` or `String(101)`.
3. In JavaScript, strings like `"yes"` or `"true"` are truthy, but in TypeScript they are still strictly strings and cannot be assigned to a `boolean` variable.
