// 05-day-5-type-system/examples/exercises.ts

// Exercise 1: Union type for user roles
export type UserRole = "admin" | "member" | "guest";
const user1Role: UserRole = "admin";
const user2Role: UserRole = "member";
const user3Role: UserRole = "guest";
console.log(`Ex 1: Roles assigned: ${user1Role}, ${user2Role}, ${user3Role}`);

// Exercise 2: Type for a vehicle
export type Vehicle = {
  make: string;
  model: string;
  year: number;
  isElectric?: boolean;
};
const car: Vehicle = { make: "Tesla", model: "Model 3", year: 2023, isElectric: true };
const truck: Vehicle = { make: "Ford", model: "F-150", year: 2021 };
console.log(`Ex 2: Car: ${car.make} ${car.model} (Electric: ${car.isElectric})`);
console.log(`Ex 2: Truck: ${truck.make} ${truck.model} (Electric: ${truck.isElectric ?? false})`);

// Exercise 3: Interface for a student
export interface Day5Student {
  id: number;
  name: string;
  grades: number[];
  email?: string;
}
const studentAlpha: Day5Student = {
  id: 101,
  name: "Marcus Aurelius",
  grades: [92, 88, 95],
  email: "marcus@rome.edu",
};
console.log(`Ex 3: Student: ${studentAlpha.name}, Grades count: ${studentAlpha.grades.length}`);

// Exercise 4: Function accepting string or number
export function formatInput(input: string | number): string {
  if (typeof input === "string") {
    return `STRING: ${input.toUpperCase()}`;
  } else {
    return `NUMBER DOUBLED: ${input * 2}`;
  }
}
console.log(`Ex 4:`, formatInput("typescript"));
console.log(`Ex 4:`, formatInput(21));

// Exercise 5: Safe user role handler
export function getWelcomeMessage(role: UserRole): string {
  switch (role) {
    case "admin":
      return "Welcome, Administrator! Full dashboard access granted.";
    case "member":
      return "Welcome back, Member! View your enrolled courses.";
    case "guest":
      return "Welcome, Guest! Feel free to browse our public catalog.";
    default:
      return "Welcome!";
  }
}
console.log(`Ex 5 (Admin):`, getWelcomeMessage("admin"));
console.log(`Ex 5 (Guest):`, getWelcomeMessage("guest"));
