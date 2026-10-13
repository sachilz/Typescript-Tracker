// 06-day-6-modern-typescript/examples/exercises.ts
import { add, multiply } from "./mathUtils";

// Exercise 1: Import and export
console.log(`Ex 1: MathUtils add(15, 25) = ${add(15, 25)}`);
console.log(`Ex 1: MathUtils multiply(4, 9) = ${multiply(4, 9)}`);

// Exercise 2: Generic function that creates a pair
function makePair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}
const pair1 = makePair<string, number>("UserID", 404);
const pair2 = makePair<boolean, string>(true, "Success");
console.log("Ex 2:", pair1, pair2);

// Exercise 3: Async function returning sample user data
interface MockUser {
  id: number;
  name: string;
  role: string;
}

async function fetchSampleUser(id: number): Promise<MockUser> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Sample Learner", role: "Student" });
    }, 20);
  });
}

// Exercise 4: try...catch error handling
function parseScore(input: string): number {
  const result = Number(input);
  if (isNaN(result)) {
    throw new Error(`Cannot parse "${input}" as a valid score.`);
  }
  return result;
}

try {
  const validScore = parseScore("95");
  console.log(`Ex 4: Parsed score successfully: ${validScore}`);
  parseScore("not-a-number");
} catch (error) {
  console.log(`Ex 4 Caught expected error: ${(error as Error).message}`);
}

// Exercise 5: JSON runtime validation
const rawJson = '{"id": 42, "role": "admin"}';
const parsedData: unknown = JSON.parse(rawJson);

function isUserPayload(data: unknown): data is { id: number; role: string } {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof (data as Record<string, unknown>).id === "number" &&
    "role" in data &&
    typeof (data as Record<string, unknown>).role === "string"
  );
}

if (isUserPayload(parsedData)) {
  console.log(`Ex 5: Validated safely -> ID: ${parsedData.id}, Role: ${parsedData.role}`);
} else {
  console.log("Ex 5: Validation failed.");
}

async function runAsyncExercise() {
  const user = await fetchSampleUser(10);
  console.log(`Ex 3: Fetched async user: ${user.name} (${user.role})`);
}
runAsyncExercise();
