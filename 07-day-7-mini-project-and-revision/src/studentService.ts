// 07-day-7-mini-project-and-revision/src/studentService.ts
import { Student, NewStudentInput, StudentSummary, AcademicStatus } from "./types";

/**
 * Passing threshold average mark.
 */
const PASSING_THRESHOLD = 50;

/**
 * In-memory list of initial sample students.
 */
const students: Student[] = [
  { id: 1, name: "Alice Johnson", age: 20, marks: [85, 90, 78, 92] },
  { id: 2, name: "Bob Smith", age: 22, marks: [45, 52, 40, 48] },
  { id: 3, name: "Charlie Davis", age: 21, marks: [65, 70, 72, 68] },
  { id: 4, name: "Diana Prince", age: 19, marks: [95, 98, 92, 100] },
];

/**
 * Returns a copy of all students currently in the system.
 */
export function listAllStudents(): Student[] {
  return [...students];
}

/**
 * Calculates the average mark of a list of numbers.
 */
export function calculateAverageMark(marks: number[]): number {
  if (marks.length === 0) {
    return 0;
  }
  const sum = marks.reduce((acc, curr) => acc + curr, 0);
  return Number((sum / marks.length).toFixed(2));
}

/**
 * Determines whether the given average qualifies as "Pass" or "Fail".
 */
export function getStudentStatus(average: number): AcademicStatus {
  return average >= PASSING_THRESHOLD ? "Pass" : "Fail";
}

/**
 * Searches for a student by their unique ID.
 * Returns undefined if not found.
 */
export function findStudentById(id: number): Student | undefined {
  if (typeof id !== "number" || isNaN(id) || id <= 0) {
    throw new Error(`Invalid student ID: "${id}". ID must be a positive number.`);
  }
  return students.find((student) => student.id === id);
}

/**
 * Adds a new student to the system with input validation.
 */
export function addStudent(input: NewStudentInput): Student {
  // 1. Validate name
  if (!input.name || input.name.trim().length === 0) {
    throw new Error("Student name cannot be empty.");
  }

  // 2. Validate age
  if (typeof input.age !== "number" || input.age <= 0 || !Number.isInteger(input.age)) {
    throw new Error(`Invalid age: ${input.age}. Age must be a positive whole number.`);
  }

  // 3. Validate marks
  if (!Array.isArray(input.marks) || input.marks.length === 0) {
    throw new Error("Marks must be a non-empty array of numbers.");
  }

  for (const mark of input.marks) {
    if (typeof mark !== "number" || isNaN(mark) || mark < 0 || mark > 100) {
      throw new Error(`Invalid mark: ${mark}. Marks must be between 0 and 100.`);
    }
  }

  // Generate next sequential ID
  const nextId = students.length > 0 ? Math.max(...students.map((s) => s.id)) + 1 : 1;

  const newStudent: Student = {
    id: nextId,
    name: input.name.trim(),
    age: input.age,
    marks: [...input.marks],
  };

  students.push(newStudent);
  return newStudent;
}

/**
 * Generates a full summary report for a specific student.
 */
export function getStudentSummary(id: number): StudentSummary | null {
  const student = findStudentById(id);
  if (!student) {
    return null;
  }

  const averageMark = calculateAverageMark(student.marks);
  const status = getStudentStatus(averageMark);

  return {
    id: student.id,
    name: student.name,
    age: student.age,
    marks: student.marks,
    averageMark,
    status,
  };
}
