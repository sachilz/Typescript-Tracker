"use strict";
/**
 * =====================================================================
 * Day 3: Interfaces and Type Aliases
 * =====================================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
console.log("--- Day 3: Interfaces and Type Aliases ---");
const developer = {
    firstName: "Sachintha",
    lastName: "Perera",
    age: 24,
    employeeId: "EMP-2026",
    department: "Software Engineering",
    salary: 85000
};
console.log("Employee Profile:", developer);
const auditedDev = {
    ...developer,
    createdAt: new Date(),
    updatedAt: new Date()
};
console.log("Audited Employee Created At:", auditedDev.createdAt.toISOString());
const configSettings = {
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
