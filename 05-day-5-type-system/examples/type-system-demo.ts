// 05-day-5-type-system/examples/type-system-demo.ts

// 1. Literal type and Union type
export type SystemRole = "admin" | "editor" | "viewer";

// 2. Interface for User
export interface SystemUser {
  id: number;
  name: string;
  role: SystemRole;
  email?: string;
}

// 3. Function that handles user roles safely with exhaustiveness
export function getPermissions(role: SystemRole): string[] {
  switch (role) {
    case "admin":
      return ["create", "read", "update", "delete"];
    case "editor":
      return ["create", "read", "update"];
    case "viewer":
      return ["read"];
    default:
      return [];
  }
}

// 4. Function using type narrowing with typeof
export function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return `Text: "${value.trim()}"`;
  } else {
    return `Numeric: $${value.toFixed(2)}`;
  }
}

// Running demo
console.log("=== Day 5: Type System Demo ===");
const adminUser: SystemUser = { id: 1, name: "Alice", role: "admin" };
console.log(`User: ${adminUser.name}, Role: ${adminUser.role}`);
console.log("Permissions:", getPermissions(adminUser.role));
console.log(formatValue("   Hello World   "));
console.log(formatValue(49.9));
