# 📅 Day 2: Functions, Objects, Arrays & Tuples

## 🎯 Learning Objectives
- Master function parameter and return type annotations
- Work with optional parameters, default values, and rest parameters
- Understand object typing and inline object shapes
- Learn typed Arrays and Tuples (fixed-length, ordered types)
- Use `readonly` to protect data from mutations

---

## 📚 Key Topics
1. **Function Typing**:
   - Explicit return types vs inferred return types
   - Arrow functions with types
   - Optional parameters (`param?: string`)
   - Default parameter values
   - Rest parameters (`...rest: number[]`)
2. **Object Typing**:
   - Describing object shapes inline: `{ id: number; name: string }`
   - Optional properties
   - `readonly` properties
3. **Arrays and Tuples**:
   - Array typing: `number[]` or `Array<string>`
   - Tuples: fixed length & specific types per position `[string, number, boolean]`
   - Readonly arrays: `readonly string[]`

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 2 code:
```bash
npm run day-02
# or
npx tsx day-02-functions-and-objects/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Write functions with explicit argument and return types
- [ ] Implement an optional and default parameter function
- [ ] Define and manipulate typed arrays
- [ ] Create and destructure a TypeScript tuple
- [ ] Complete all exercises in `exercises.ts`
