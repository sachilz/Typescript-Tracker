// 06-day-6-modern-typescript/examples/generics-and-async.ts

// 1. A simple generic function
function getFirstElement<T>(items: T[]): T | undefined {
  return items.length > 0 ? items[0] : undefined;
}

// 2. Simulated async API call returning Promise<T>
interface UserData {
  id: number;
  name: string;
  email: string;
}

async function fetchSimulatedUser(id: number): Promise<UserData> {
  return new Promise((resolve, reject) => {
    if (id <= 0) {
      reject(new Error("Invalid user ID: must be greater than zero."));
      return;
    }
    setTimeout(() => {
      resolve({ id, name: "Alice Walker", email: "alice@example.com" });
    }, 50);
  });
}

// 3. Handling with async/await and try...catch
async function runDemo(): Promise<void> {
  console.log("=== Day 6: Generics and Async Demo ===");
  try {
    const user = await fetchSimulatedUser(1);
    console.log(`Fetched user: ${user.name} (${user.email})`);

    const firstScore = getFirstElement<number>([95, 80, 75]);
    console.log(`First score: ${firstScore}`);

    const firstName = getFirstElement<string>(["Ada", "Grace", "Linus"]);
    console.log(`First name: ${firstName}`);
  } catch (error) {
    console.error("Error occurred:", (error as Error).message);
  }
}

runDemo();
