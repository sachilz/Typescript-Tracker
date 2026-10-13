# Day 7: Mini Project and Comprehensive Revision

Welcome to Day 7! Today you synthesize everything you have learned over the past week into a complete, runnable **Student Management System** terminal application. Afterwards, you will find a full 7-day revision checklist, 10 final practice questions, 5 debugging challenges, a self-assessment, and recommended next steps for your TypeScript journey.

---

## 1. Learning Objectives

By the end of Day 7, you will:
- Combine types, interfaces, functions, arrays, and modules into a complete application.
- Build clean, validated business logic with TypeScript error handling.
- Compile and execute a multi-file TypeScript terminal project.
- Review and reinforce all core concepts covered in Days 0 through 6.
- Assess your readiness to write production-grade TypeScript code.

---

## 2. Topics to Learn

- [ ] Project Architecture & Separation of Concerns (`types.ts`, `studentService.ts`, `index.ts`)
- [ ] Safe CRUD Operations on in-memory collections
- [ ] Validating user input and handling invalid data gracefully
- [ ] Generating formatted summaries and calculating statistics
- [ ] Comprehensive 7-day revision checklist
- [ ] 10 final practice questions & 5 debugging challenges
- [ ] Self-assessment and future learning paths

---

## 3. Simple Explanations

### Mini Project Overview
The **Student Management System** is an in-memory, command-line application that demonstrates:
- **Type Definitions (`types.ts`)**: Custom interfaces (`Student`, `StudentSummary`) and literal types (`AcademicStatus`).
- **Business Logic Service (`studentService.ts`)**: Pure functions for adding, searching, calculating averages, validating input, and filtering students.
- **Entry Point (`index.ts`)**: Interactive terminal runner demonstrating operations, validation guards, and formatted reporting.

### How to Compile and Run the Project

From the `typescript-in-7-days` root directory:

```bash
# 1. Compile the TypeScript files
npm run build

# 2. Run the compiled project
npm run start:project
```

Or run via `npx tsc` directly:
```bash
npx tsc
node dist/07-day-7-mini-project-and-revision/src/index.js
```

---

## 4. Code Examples

### Project File Structure
```text
07-day-7-mini-project-and-revision/
├── README.md
├── solutions.md
└── src/
    ├── types.ts          # Type definitions and interfaces
    ├── studentService.ts # Business logic & validation
    └── index.ts          # Terminal demo runner
```

### Key Type Definitions ([src/types.ts](./src/types.ts))
```ts
export type AcademicStatus = "Pass" | "Fail";

export interface Student {
  id: number;
  name: string;
  age: number;
  marks: number[];
}

export type NewStudentInput = {
  name: string;
  age: number;
  marks: number[];
};

export interface StudentSummary {
  id: number;
  name: string;
  age: number;
  marks: number[];
  averageMark: number;
  status: AcademicStatus;
}
```

### Key Service Operations ([src/studentService.ts](./src/studentService.ts))
```ts
export function calculateAverageMark(marks: number[]): number {
  if (marks.length === 0) return 0;
  const sum = marks.reduce((acc, curr) => acc + curr, 0);
  return Number((sum / marks.length).toFixed(2));
}

export function getStudentStatus(average: number): AcademicStatus {
  return average >= 50 ? "Pass" : "Fail";
}
```

---

## 5. Code Explanation

- `types.ts`: Acts as the single source of truth for all data shapes across the app.
- `calculateAverageMark`: Uses `.reduce()` to compute sums with strict type checking.
- `addStudent`: Guards against bad data (empty names, negative ages, marks outside 0–100) by throwing explicit errors before mutating state.
- `index.ts`: Uses `try...catch` blocks to demonstrate resilient execution even when invalid data is supplied.

---

## 6. Common Mistakes

### Mistake 1: Not cloning arrays when returning in-memory collections
```ts
export function listAllStudents(): Student[] {
  return students; // ❌ Callers can mutate the internal array!
}
```
**Fix:** Return a shallow copy:
```ts
export function listAllStudents(): Student[] {
  return [...students]; // ✅ Encapsulation preserved
}
```

### Mistake 2: Assuming array indexing always finds a match
```ts
const student = findStudentById(id);
console.log(student.name); // ❌ Error: 'student' is possibly 'undefined'.
```
**Fix:** Always guard against `undefined`:
```ts
if (student) {
  console.log(student.name);
}
```

---

## 7. Exercises

1. **Exercise 1 (Feature Addition):** Add a function `deleteStudent(id: number): boolean` to `studentService.ts`. If the student exists, remove them from the array and return `true`; otherwise return `false`.
2. **Exercise 2 (Top Performer):** Add a function `getTopStudent(): StudentSummary | null` that finds and returns the student with the highest average mark.
3. **Exercise 3 (Subject Breakdown):** Modify `Student` to store marks as an object of subjects (e.g. `{ math: 90, english: 85, science: 78 }`) instead of a plain number array.

---

## 8. Hints

- **Hint for Ex 1:** Use `const index = students.findIndex((s) => s.id === id);` followed by `students.splice(index, 1)`.
- **Hint for Ex 2:** You can use `listAllStudents()` and reduce over them comparing `calculateAverageMark(s.marks)`.
- **Hint for Ex 3:** Create `type SubjectMarks = { math: number; english: number; science: number };`.

---

## 9. Solutions

Solutions for the project exercises, final practice questions, and debugging challenges are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Run `npm run start:project` and verify terminal output.
- [ ] Understand how `types.ts`, `studentService.ts`, and `index.ts` communicate.
- [ ] Complete Exercises 1, 2, and 3.
- [ ] Review the 7-day revision checklist below.
- [ ] Complete the 10 final practice questions.
- [ ] Complete the 5 debugging challenges.
- [ ] Take the self-assessment.

---

## 11. 7-Day Revision Checklist

Review your understanding across all seven days:

### Day 0: Introduction & Setup
- [ ] Understand why TypeScript was created (safety in large codebases).
- [ ] Know how `tsc` converts TypeScript into JavaScript.
- [ ] Know that TypeScript does not execute natively in browsers.

### Day 1: TypeScript Basics
- [ ] When to use `const` vs. `let`.
- [ ] How type annotations (`: type`) enforce correctness.
- [ ] How type inference works automatically.

### Day 2: Types & Variables
- [ ] Working with `string`, `number`, and `boolean`.
- [ ] Knowing the difference between `null` and `undefined`.
- [ ] Why `any` is unsafe and why `unknown` is preferred.
- [ ] Defining typed arrays (`number[]`, `string[]`).

### Day 3: Functions
- [ ] Annotating parameter types and return types.
- [ ] Using optional parameters (`param?: type`) and default values (`param = val`).
- [ ] Using arrow functions with type safety.
- [ ] Knowing when to use `void`.

### Day 4: Arrays & Objects
- [ ] Using `.map()`, `.filter()`, and `.find()` with type inference.
- [ ] Defining inline object structures and optional properties.
- [ ] Writing your first custom `type` and `interface`.

### Day 5: Type System
- [ ] Combining values using union types (`|`).
- [ ] Restricting inputs using literal types (`"admin" | "user"`).
- [ ] Narrowing types safely with `typeof`.
- [ ] Choosing between `interface` and `type`.

### Day 6: Modern TypeScript
- [ ] Splitting code across files with `export` and `import`.
- [ ] Writing simple generic functions (`<T>`).
- [ ] Handling async operations with `async`/`await` and `Promise<T>`.
- [ ] Catching runtime errors with `try...catch`.
- [ ] Understanding why external JSON requires runtime validation.

### Day 7: Mini Project
- [ ] Structuring a modular TypeScript application.
- [ ] Writing safe business logic and input validation.

---

## 12. Ten Final Practice Questions

Test your knowledge with these 10 concept check questions:

1. **Question 1:** What does `tsc` do when it compiles TypeScript code? Does it produce type errors at runtime?
2. **Question 2:** Why should `var` be avoided in modern TypeScript?
3. **Question 3:** What is the inferred type of `let count = 42;`? Can you assign `"42"` to it later?
4. **Question 4:** What is the difference between `any` and `unknown`?
5. **Question 5:** Why must optional function parameters always be placed after required parameters?
6. **Question 6:** What does a function return if its return type is marked as `void`?
7. **Question 7:** If `Array.prototype.find()` searches for an item that is not present, what does it return? How should TypeScript handle this?
8. **Question 8:** When would you choose a string literal union type over a plain `string`?
9. **Question 9:** Why does `typeof` need to be used when dealing with union types like `string | number`?
10. **Question 10:** Can TypeScript detect if an external JSON API returns incorrect fields while the program is running in production? Why or why not?

*(Full answers in [solutions.md](./solutions.md))*

---

## 13. Five Debugging Challenges

Can you spot and fix the bug in each of these snippets?

### Challenge 1:
```ts
let studentAge: number = "18";
studentAge = 19;
```

### Challenge 2:
```ts
function multiply(x: number, y?: number): number {
  return x * y;
}
```

### Challenge 3:
```ts
interface Car {
  brand: string;
  model: string;
}
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};
```

### Challenge 4:
```ts
function printLength(item: string | number): void {
  console.log(item.length);
}
```

### Challenge 5:
```ts
async function getUserName(id: number): Promise<string> {
  return "Alex";
}
const username: string = getUserName(1);
```

*(Full solutions and explanations in [solutions.md](./solutions.md))*

---

## 14. Short Self-Assessment

Score yourself honestly (1 to 5 points each):
1. I can explain the difference between JavaScript and TypeScript to another developer. `[ / 5]`
2. I can write functions with proper parameter and return types without looking up syntax. `[ / 5]`
3. I understand why `any` should be avoided and how to use `unknown` safely. `[ / 5]`
4. I can create and extend object shapes using `interface` or `type`. `[ / 5]`
5. I know how to narrow union types with `typeof` and handle asynchronous code with `async`/`await`. `[ / 5]`

- **20–25 Points:** Outstanding! You have mastered the fundamentals and are ready for real-world projects.
- **15–19 Points:** Solid foundation. Review the days where you felt less confident.
- **Under 15 Points:** Spend another couple of days redoing the exercises from Days 2 to 5.

---

## 15. What to Learn Next

Congratulations on completing the 7-day TypeScript challenge! Here are the best avenues to explore next:

1. **TypeScript with Frontend Frameworks:**
   - React with TypeScript (Typed props, hooks, and component states).
   - Vue 3 / Nuxt with `<script setup lang="ts">`.
2. **TypeScript on the Backend:**
   - Building REST APIs with Express or Fastify using TypeScript.
   - NestJS: Enterprise backend framework built entirely on TypeScript.
3. **Advanced TypeScript Concepts:**
   - Generics with constraints (`<T extends object>`).
   - Utility Types (`Partial<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`).
   - Discriminated Unions and custom Type Guards (`is`).
4. **Runtime Schema Validation:**
   - Learn **Zod** or **Valibot** to validate external API data and forms automatically.
