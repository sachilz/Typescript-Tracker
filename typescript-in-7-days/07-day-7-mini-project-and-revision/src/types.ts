// 07-day-7-mini-project-and-revision/src/types.ts

/**
 * Status literal representing whether a student passed or failed.
 */
export type AcademicStatus = "Pass" | "Fail";

/**
 * Core interface representing a Student record.
 */
export interface Student {
  id: number;
  name: string;
  age: number;
  marks: number[];
}

/**
 * Input type for creating a new student.
 */
export type NewStudentInput = {
  name: string;
  age: number;
  marks: number[];
};

/**
 * Computed summary report for a student.
 */
export interface StudentSummary {
  id: number;
  name: string;
  age: number;
  marks: number[];
  averageMark: number;
  status: AcademicStatus;
}
