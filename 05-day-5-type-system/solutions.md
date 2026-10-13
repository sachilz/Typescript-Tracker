# Solutions — Day 5: The Type System

Complete solutions and explanations for Day 5 exercises.

---

## Exercise 1: User Roles Union

```ts
type UserRole = "admin" | "member" | "guest";

const adminUser: UserRole = "admin";
const regularUser: UserRole = "member";
const visitor: UserRole = "guest";

console.log(`Roles: ${adminUser}, ${regularUser}, ${visitor}`);
```

### Explanation:
- A string literal union guarantees that only `"admin"`, `"member"`, or `"guest"` can be assigned. Any other string triggers a compiler error.

---

## Exercise 2: Vehicle Type

```ts
type Vehicle = {
  make: string;
  model: string;
  year: number;
  isElectric?: boolean;
};

const electricCar: Vehicle = {
  make: "Tesla",
  model: "Model Y",
  year: 2024,
  isElectric: true,
};

const gasCar: Vehicle = {
  make: "Honda",
  model: "Civic",
  year: 2020,
};

console.log("Electric Car:", electricCar);
console.log("Gas Car:", gasCar);
```

### Explanation:
- The `isElectric?: boolean` property is optional, allowing objects to be constructed with or without it.

---

## Exercise 3: Student Interface

```ts
interface Student {
  id: number;
  name: string;
  grades: number[];
  email?: string;
}

const learner: Student = {
  id: 1,
  name: "Sophia Chen",
  grades: [95, 88, 92],
  email: "sophia@example.edu",
};

console.log(`Student ${learner.name} has ${learner.grades.length} grades.`);
```

### Explanation:
- An `interface` defines an object contract.
- It can be easily extended in future work using `extends` if needed.

---

## Exercise 4: Function with Type Narrowing (`string | number`)

```ts
function formatInput(input: string | number): string {
  if (typeof input === "string") {
    // Inside this branch, TypeScript knows input is string
    return `STRING: ${input.toUpperCase()}`;
  } else {
    // Inside this branch, TypeScript knows input is number
    return `NUMBER DOUBLED: ${input * 2}`;
  }
}

console.log(formatInput("developer")); // STRING: DEVELOPER
console.log(formatInput(50));          // NUMBER DOUBLED: 100
```

### Explanation:
- `typeof input === "string"` acts as a type guard.
- TypeScript automatically narrows the type in both branches.

---

## Exercise 5: Handling User Roles Safely

```ts
type UserRole = "admin" | "member" | "guest";

function getWelcomeMessage(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Welcome, Administrator! Full dashboard access granted.";
    case "member":
      return "Welcome back, Member! View your enrolled courses.";
    case "guest":
      return "Welcome, Guest! Feel free to browse our public catalog.";
  }
}

console.log(getWelcomeMessage("admin"));
console.log(getWelcomeMessage("member"));
console.log(getWelcomeMessage("guest"));
```

### Explanation:
- Because `role` is limited to `"admin" | "member" | "guest"`, testing each case covers all possible values.
- If someone adds another role like `"editor"` to `UserRole` later, TypeScript will alert you if you forget to handle it in this switch statement.
