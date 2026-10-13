# 📅 Day 1: TypeScript Basics & Setup

## 🎯 Learning Objectives
- Understand why TypeScript is used over JavaScript
- Learn how the TypeScript compiler (`tsc`) works
- Master primitive types, type inference, and type annotations
- Understand special types: `any`, `unknown`, `void`, and `never`
- Learn how type assertions (`as`) work

---

## 📚 Key Topics
1. **Introduction to TypeScript**: Static typing vs. dynamic typing.
2. **Environment & Tooling**: Running TypeScript using `tsc` or `tsx`.
3. **Primitive Types**:
   - `string`, `number`, `boolean`
   - `null`, `undefined`
   - `bigint`, `symbol`
4. **Special Types**:
   - `any`: Opt-out of type checking (use sparingly).
   - `unknown`: Type-safe counterpart of `any`.
   - `void`: Represents the return value of functions that don't return anything.
   - `never`: Represents values that never occur (e.g., infinite loop, throwing an error).
5. **Type Assertions**: Casting types using `value as string`.

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 1 code:
```bash
npm run day-01
# or
npx tsx day-01-basics-and-setup/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Install and configure TypeScript
- [ ] Understand `tsconfig.json` basic options
- [ ] Practice declaring variables with explicit types
- [ ] Understand difference between `any` and `unknown`
- [ ] Complete all exercises in `exercises.ts`
