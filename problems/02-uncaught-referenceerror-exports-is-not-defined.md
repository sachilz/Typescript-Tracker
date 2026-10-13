# Problem 02: Uncaught ReferenceError: exports is not defined

- **Date:** 2026-10-13
- **Topic:** Browser vs Node.js Module Systems
- **Context:** Opening `index.html` in the browser to load compiled `hello.js`.

---

## 1. What Happened? (The Error)

In the browser's developer tools console:
```text
Uncaught ReferenceError: exports is not defined (hello.js:2)
```

Inside the compiled `hello.js` file, TypeScript had generated:
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true }); // <--- Line 2: exports doesn't exist in browsers!
console.log("hello typescript");
```

---

## 2. Root Cause Analysis

- **`exports` is a Node.js (CommonJS) feature:** Node.js uses `exports` and `require()` to share code between files.
- **Browsers do not have `exports`:** When a browser executes a script, there is no global `exports` object available.
- **Why did TypeScript generate it?**
  In `tsconfig.json`, `"module": "nodenext"` was set alongside `"type": "commonjs"` in `package.json`. This instructed TypeScript to compile for Node.js CommonJS environments instead of modern web browser environments.

---

## 3. How It Was Fixed

In [tsconfig.json](file:///c:/Users/sachintha/Desktop/Typescript-Tracker/ts-new/tsconfig.json):
1. Changed `"module"` from `"nodenext"` to `"esnext"`.
2. Added `"moduleResolution": "bundler"`.
3. Commented out `"moduleDetection": "force"`.

```json
{
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "esnext"
  }
}
```

Then recompiled:
```bash
npx tsc
```

The resulting `hello.js` is clean browser-compatible JavaScript:
```javascript
"use strict";
console.log("hello typescript");
```

---

## 4. Key Takeaways
> - **Node.js** understands CommonJS (`exports`, `require`).
> - **Web Browsers** do NOT understand CommonJS. They only understand standard scripts or ES Modules (`import` / `export`).
> - When writing TypeScript for the browser, set `"module": "esnext"`.
