// 07-day-7-mini-project-and-revision/src/index.ts
import {
  listAllStudents,
  addStudent,
  findStudentById,
  calculateAverageMark,
  getStudentStatus,
  getStudentSummary,
} from "./studentService";

function printSeparator(): void {
  console.log("-----------------------------------------------------------------");
}

function printHeader(title: string): void {
  console.log("\n=================================================================");
  console.log(`  ${title.toUpperCase()}`);
  console.log("=================================================================");
}

function displayAll(): void {
  printHeader("Current Enrolled Students");
  const allStudents = listAllStudents();
  console.log(`Total count: ${allStudents.length}\n`);

  for (const s of allStudents) {
    const avg = calculateAverageMark(s.marks);
    const status = getStudentStatus(avg);
    console.log(
      `ID: [${s.id}] | Name: ${s.name.padEnd(16)} | Age: ${s.age} | Marks: [${s.marks.join(
        ", "
      )}] | Avg: ${avg.toFixed(1)} | Status: [${status}]`
    );
  }
}

function runDemo(): void {
  console.log("\n🎓 Welcome to the TypeScript Student Management System 🎓");

  // 1. List initial students
  displayAll();

  // 2. Add a new valid student
  printHeader("Action: Adding a New Student");
  try {
    const newlyAdded = addStudent({
      name: "Evan Wright",
      age: 23,
      marks: [88, 91, 84, 89],
    });
    console.log(`✅ Successfully added student: ${newlyAdded.name} with ID #${newlyAdded.id}!`);
  } catch (error) {
    console.error(`❌ Failed to add student: ${(error as Error).message}`);
  }

  // 3. Search for a student by ID
  printHeader("Action: Searching Student by ID");
  const searchId = 1;
  const summary = getStudentSummary(searchId);

  if (summary) {
    console.log(`Found Student Record #${summary.id}:`);
    console.log(`  Name:         ${summary.name}`);
    console.log(`  Age:          ${summary.age}`);
    console.log(`  Marks:        ${summary.marks.join(", ")}`);
    console.log(`  Average Mark: ${summary.averageMark}`);
    console.log(`  Final Status: ${summary.status}`);
  } else {
    console.log(`No student found with ID #${searchId}.`);
  }

  // 4. Search for a non-existent ID
  printHeader("Action: Searching Non-Existent ID (#99)");
  const missing = getStudentSummary(99);
  if (!missing) {
    console.log("⚠️ Student with ID #99 was not found in the system (Handled cleanly).");
  }

  // 5. Test input validation and error handling
  printHeader("Action: Testing Input Validation & Error Handling");

  const invalidTestCases = [
    { name: "", age: 20, marks: [80, 85], description: "Empty name" },
    { name: "Jake", age: -5, marks: [80, 85], description: "Negative age" },
    { name: "Maya", age: 22, marks: [80, 150], description: "Mark > 100" },
    { name: "Leo", age: 21, marks: [], description: "Empty marks array" },
  ];

  for (const test of invalidTestCases) {
    try {
      console.log(`Testing invalid input (${test.description})...`);
      addStudent({ name: test.name, age: test.age, marks: test.marks });
    } catch (error) {
      console.log(`  ↳ Caught expected error: ${(error as Error).message}`);
    }
  }

  // 6. Display final updated list
  printHeader("Final Student Roster");
  displayAll();
  printSeparator();
  console.log("Demo execution completed successfully!\n");
}

runDemo();
