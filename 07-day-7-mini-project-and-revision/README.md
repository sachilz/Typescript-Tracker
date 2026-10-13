# 07: Day 7 — Mini Project & Comprehensive Revision

Welcome to Day 7. Today brings together all the concepts covered throughout the week into a complete, terminal-based **Student Management System**.

After reviewing and running the project, you will find a full 7-day revision checklist, ten practice questions, five debugging challenges, a short self-assessment, and recommended next steps for your TypeScript learning.

---

## 1. Learning Objectives

By the end of this day, you will be able to:

- Structure a modular TypeScript application with clean separation of concerns.
- Enforce data models using custom types, interfaces, and union literals.
- Implement in-memory CRUD operations with input validation.
- Handle runtime errors cleanly using `try...catch`.
- Review and reinforce core concepts from Days 0 through 6.
- Assess your readiness to write TypeScript in real projects.

---

## 2. Topics to Learn

- [ ] Project Architecture (`types.ts`, `studentService.ts`, `index.ts`)
- [ ] In-memory CRUD operations with type safety
- [ ] Validating user input and error handling
- [ ] Calculating averages and generating formatted reports
- [ ] Compiling and executing the project in the terminal
- [ ] 7-day revision checklist
- [ ] 10 final practice questions
- [ ] 5 debugging challenges
- [ ] Self-assessment and next steps

---

## 3. Explanations

### Project Architecture: Separation of Concerns

The Student Management System is organized into three focused files:

```text
07-day-7-mini-project-and-revision/
├── README.md
├── solutions.md
└── src/
    ├── types.ts          # Type definitions and interfaces
    ├── studentService.ts # Business logic, scoring, search, validation
    └── index.ts          # Terminal application entry point
```

1. **`src/types.ts`:** Contains interfaces (`Student`, `StudentSummary`) and literal types (`AcademicStatus`). No business logic lives here.
2. **`src/studentService.ts`:** Implements all operations (`addStudent`, `findStudentById`, `calculateAverageMark`). Functions here validate inputs and return data or throw errors.
3. **`src/index.ts`:** The entry point. It calls service functions, handles any thrown errors with `try...catch`, and prints formatted output to the terminal.

---

### How to Compile and Run the Project

From the repository root folder:

```bash
# 1. Compile the project
npm run build

# 2. Run the compiled application
npm run start:project
```

Or run via `npx tsc` directly:
```bash
npx tsc
node dist/07-day-7-mini-project-and-revision/src/index.js
```

---

## 4. Code Example

### Core Data Models ([src/types.ts](./src/types.ts))

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

### Core Business Operations ([src/studentService.ts](./src/studentService.ts))

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

### Expected Output

Running `npm run start:project` produces:

```text
🎓 Welcome to the TypeScript Student Management System 🎓

=================================================================
  CURRENT ENROLLED STUDENTS
=================================================================
Total count: 4

ID: [1] | Name: Alice Johnson    | Age: 20 | Marks: [85, 90, 78, 92] | Avg: 86.3 | Status: [Pass]
ID: [2] | Name: Bob Smith        | Age: 22 | Marks: [45, 52, 40, 48] | Avg: 46.3 | Status: [Fail]
ID: [3] | Name: Charlie Davis    | Age: 21 | Marks: [65, 70, 72, 68] | Avg: 68.8 | Status: [Pass]
ID: [4] | Name: Diana Prince     | Age: 19 | Marks: [95, 98, 92, 100] | Avg: 96.3 | Status: [Pass]

=================================================================
  ACTION: ADDING A NEW STUDENT
=================================================================
✅ Successfully added student: Evan Wright with ID #5!

=================================================================
  ACTION: SEARCHING STUDENT BY ID
=================================================================
Found Student Record #1:
  Name:         Alice Johnson
  Age:          20
  Marks:        85, 90, 78, 92
  Average Mark: 86.25
  Final Status: Pass

=================================================================
  ACTION: TESTING INPUT VALIDATION & ERROR HANDLING
=================================================================
Testing invalid input (Empty name)...
  ↳ Caught expected error: Student name cannot be empty.
Testing invalid input (Negative age)...
  ↳ Caught expected error: Invalid age: -5. Age must be a positive whole number.
Testing invalid input (Mark > 100)...
  ↳ Caught expected error: Invalid mark: 150. Marks must be between 0 and 100.
Testing invalid input (Empty marks array)...
  ↳ Caught expected error: Marks must be a non-empty array of numbers.

=================================================================
  FINAL STUDENT ROSTER
=================================================================
Total count: 5
-----------------------------------------------------------------
Demo execution completed successfully!
```

---

## 5. Code Explanation

- `types.ts`: Acts as the central type contract for all modules.
- `calculateAverageMark`: Uses `.reduce()` to compute numeric averages with strict return types.
- `addStudent`: Implements defensive runtime checks against bad input (empty names, negative ages, invalid marks) and throws explicit errors before modifying data.
- `index.ts`: Catches exceptions inside `try...catch` blocks so terminal execution completes smoothly without crashing.

---

## 6. Common Mistakes

### Mistake 1: Directly mutating internal state arrays
```ts
export function listAllStudents(): Student[] {
  return students; // Callers can mutate or clear the internal array
}
```
**Fix:** Return a copy:
```ts
export function listAllStudents(): Student[] {
  return [...students];
}
```

### Mistake 2: Assuming `.find()` always finds a matching record
```ts
const student = findStudentById(id);
console.log(student.name); // Error: 'student' is possibly 'undefined'.
```
**Fix:** Verify that the record exists before accessing properties:
```ts
if (student) {
  console.log(student.name);
}
```

---

## 7. Exercises

Extend the Student Management System:

1. **Exercise 1 (Delete Feature):** Add a function `deleteStudent(id: number): boolean` to `studentService.ts`. If found, remove them from the array and return `true`; otherwise return `false`.
2. **Exercise 2 (Top Performer):** Add a function `getTopStudent(): StudentSummary | null` that finds and returns the student with the highest average mark.
3. **Exercise 3 (Subject Breakdown):** Create a type `SubjectMarks = { math: number; english: number; science: number };` and refactor student scoring to support subject breakdowns.

---

## 8. Hints

- **Hint for Ex 1:** Use `const index = students.findIndex((s) => s.id === id);` followed by `students.splice(index, 1)`.
- **Hint for Ex 2:** Iterate through `listAllStudents()` comparing `calculateAverageMark(s.marks)`.
- **Hint for Ex 3:** Use `Object.values(subjects)` to compute subject averages.

---

## 9. Solutions

Complete solutions for the exercises, practice questions, and debugging challenges are in [solutions.md](./solutions.md).

---

## 10. Completion Checklist

- [ ] Compiled and executed `npm run start:project`.
- [ ] Understand the architecture across `types.ts`, `studentService.ts`, and `index.ts`.
- [ ] Attempted Exercises 1, 2, and 3.
- [ ] Reviewed the 7-day revision checklist below.
- [ ] Answered the 10 final practice questions.
- [ ] Solved the 5 debugging challenges.
- [ ] Completed the self-assessment.

---

## 11. 7-Day Revision Checklist

### Day 0: Setup & Compilation
- [ ] Understand why TypeScript was created (safety in large codebases).
- [ ] Know how `tsc` converts TypeScript into clean JavaScript.
- [ ] Understand that TypeScript does not run natively in the browser.

### Day 1: TypeScript Basics
- [ ] When to use `const` vs `let` (and why `var` is outdated).
- [ ] How explicit type annotations (`: type`) enforce correctness.
- [ ] How type inference works automatically without manual typing.

### Day 2: Types & Variables
- [ ] Working with `string`, `number`, and `boolean`.
- [ ] Knowing the difference between `null` and `undefined`.
- [ ] Why `any` is dangerous and why `unknown` is preferred.
- [ ] Defining typed arrays (`number[]`, `string[]`).

### Day 3: Functions
- [ ] Annotating parameter types and return types.
- [ ] Using optional parameters (`param?: type`) and default values (`param = val`).
- [ ] Writing type-safe arrow functions.
- [ ] Knowing when to use `void`.

### Day 4: Arrays & Objects
- [ ] Using `.map()`, `.filter()`, and `.find()` with type inference.
- [ ] Defining inline object structures and optional properties.
- [ ] Writing custom `type` and `interface` models.

### Day 5: The Type System
- [ ] Combining values using union types (`|`).
- [ ] Restricting inputs using literal types (`"admin" | "user"`).
- [ ] Narrowing types safely with `typeof`.
- [ ] Knowing when to choose `interface` vs `type`.

### Day 6: Modern TypeScript
- [ ] Splitting code across files with `export` and `import`.
- [ ] Writing simple generic functions (`<T>`).
- [ ] Handling async operations with `async`/`await` and `Promise<T>`.
- [ ] Catching runtime errors with `try...catch`.
- [ ] Understanding why external JSON requires runtime validation.

### Day 7: Mini Project
- [ ] Structuring a modular TypeScript application.
- [ ] Writing safe business logic, input validation, and defensive error handling.

---

## 12. Ten Final Practice Questions

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

Spot and fix the bug in each of these snippets:

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

Rate your understanding (1 to 5 points each):
1. I can explain the difference between JavaScript and TypeScript to another developer. `[ / 5]`
2. I can write functions with proper parameter and return types without looking up syntax. `[ / 5]`
3. I understand why `any` should be avoided and how to use `unknown` safely. `[ / 5]`
4. I can create and extend object shapes using `interface` or `type`. `[ / 5]`
5. I know how to narrow union types with `typeof` and handle asynchronous code with `async`/`await`. `[ / 5]`

- **20–25 Points:** Ready to write TypeScript in real applications.
- **15–19 Points:** Solid foundation. Review the days where you felt less confident.
- **Under 15 Points:** Review the exercises from Days 2 through 5.

---

## 15. What to Learn Next

Here are practical next steps for continuing with TypeScript:

1. **Frontend Frameworks:**
   - React with TypeScript (typing props, hooks, and component states).
   - Vue 3 or Svelte with TypeScript.
2. **Backend Applications:**
   - REST APIs with Express or Fastify using TypeScript.
   - NestJS (enterprise backend framework built with TypeScript).
3. **Advanced TypeScript Features:**
   - Generic constraints (`<T extends object>`).
   - Built-in Utility Types (`Partial<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, V>`).
   - Discriminated Unions and custom type guards (`value is Type`).
4. **Runtime Schema Validation:**
   - Libraries like **Zod** or **Valibot** for validating external API payloads and form inputs at runtime.

---

[⬅️ Day 6: Modern TypeScript](../06-day-6-modern-typescript/README.md) | [Back to Main Curriculum ➔](../README.md)
