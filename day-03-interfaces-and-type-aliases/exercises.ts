/**
 * =====================================================================
 * Day 3: Interfaces and Type Aliases
 * =====================================================================
 */

console.log("--- Day 3: Interfaces and Type Aliases ---");

// 1. Base Interface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// 2. Extending an Interface
interface Employee extends Person {
  employeeId: string;
  department: string;
  salary: number;
}

const developer: Employee = {
  firstName: "Sachintha",
  lastName: "Perera",
  age: 24,
  employeeId: "EMP-2026",
  department: "Software Engineering",
  salary: 85000
};

console.log("Employee Profile:", developer);

// 3. Type Alias & Intersection (&)
type Timestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type AuditedEmployee = Employee & Timestamps;

const auditedDev: AuditedEmployee = {
  ...developer,
  createdAt: new Date(),
  updatedAt: new Date()
};

console.log("Audited Employee Created At:", auditedDev.createdAt.toISOString());

// 4. Index Signatures (Dynamic Keys)
interface StringMap {
  [key: string]: string;
}

const configSettings: StringMap = {
  theme: "dark",
  language: "en-US",
  mode: "production"
};

console.log("Config settings:", configSettings);

// =====================================================================
// 📝 TODO / EXERCISES FOR YOU:
// =====================================================================
// Exercise 1: Define an interface `Vehicle` and extend it into `Car` and `Motorcycle`.
// Exercise 2: Create a type `Point2D` and intersect it with `{ z: number }` to make `Point3D`.
// Exercise 3: Create an interface for an in-memory Cache with dynamic string keys and unknown values.
