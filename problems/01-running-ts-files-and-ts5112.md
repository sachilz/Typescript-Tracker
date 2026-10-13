# Problem 01: Running TypeScript Files & TS5112 Error

- **Date:** 2026-10-13
- **Topic:** TypeScript Setup & Execution Basics
- **Context:** Trying to run a simple `hello.ts` file in the terminal.

---

## 1. What Happened? (The Errors)

### Attempt 1: Running `npx hello.ts`
```bash
C:\Users\sachintha\Desktop\Typescript-Tracker\ts-new>npx hello.ts
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/hello.ts - Not found
```

### Attempt 2: Running `npx tsc hello.ts`
```bash
C:\Users\sachintha\Desktop\Typescript-Tracker\ts-new>npx tsc hello.ts
error TS5112: tsconfig.json is present but will not be loaded if files are specified on commandline. Use '--ignoreConfig' to skip this error.
```

---

## 2. Root Cause Analysis

### Why did `npx hello.ts` fail?
- `npx <name>` is designed to download and execute **npm packages** from the npm registry (like `npx create-react-app`).
- It is **not** a file runner. When given `hello.ts`, npm looked for an npm package named `"hello.ts"` online, which does not exist (`404 Not Found`).

### Why did `npx tsc hello.ts` fail (TS5112)?
- When a folder contains a `tsconfig.json` file, TypeScript expects you to compile the project based on those configuration settings.
- If you pass a specific file name (`tsc hello.ts`), TypeScript by default skips `tsconfig.json`.
- In modern TypeScript, `TS5112` is a safety error warning you: *"You have a tsconfig.json file, but by passing a specific file on the CLI, that configuration will be ignored."*

---

## 3. How to Solve It

### Approach 1: Standard Two-Step Workflow (Compile then Run)
1. Compile the project using your `tsconfig.json`:
   ```bash
   npx tsc
   ```
   *(This generates `hello.js`)*

2. Run the generated JavaScript file with Node:
   ```bash
   node hello.js
   ```

---

### Approach 2: One-Step Execution with `tsx` (Recommended for Learning)
Use `tsx` (*TypeScript Execute*), which compiles and executes TypeScript in-memory on the fly without creating extra `.js` files:

```bash
npx tsx hello.ts
```

---

### Approach 3: Compile Single File Explicitly
If you deliberately want to compile only `hello.ts` without using `tsconfig.json`:

```bash
npx tsc hello.ts --ignoreConfig
node hello.js
```

---

## 4. Key Takeaway
> **Rule of thumb:** Node.js only runs JavaScript (`.js`). To run TypeScript (`.ts`), you either compile it first with `npx tsc` and run the resulting `.js` file, or use a runner like `npx tsx <filename>`.
