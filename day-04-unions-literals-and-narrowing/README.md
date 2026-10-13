# 📅 Day 4: Unions, Literals & Type Narrowing

## 🎯 Learning Objectives
- Work with Union types (`|`) and Literal types
- Master type narrowing using built-in JavaScript operators (`typeof`, `instanceof`, `in`)
- Write custom Type Guards with the `is` keyword (`param is Type`)
- Master Discriminated Unions (Tagged Unions) for modeling complex states
- Implement Exhaustive Checking using `never`

---

## 📚 Key Topics
1. **Union & Literal Types**:
   - `type Status = "idle" | "loading" | "success" | "error";`
2. **Type Narrowing**:
   - `typeof` (strings, numbers, booleans, symbols)
   - `instanceof` (classes, Error instances, Dates)
   - `"prop" in object`
3. **User-Defined Type Guards**:
   - `function isString(val: unknown): val is string`
4. **Discriminated Unions**:
   - Common discriminant property (e.g., `kind` or `status`) that TypeScript can use to narrow the exact variant.
5. **Exhaustive Checking**:
   - Handling every branch and enforcing it at compile-time with `never`.

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 4 code:
```bash
npm run day-04
# or
npx tsx day-04-unions-literals-and-narrowing/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Define custom union types and string literal unions
- [ ] Use `typeof` and `instanceof` to narrow types safely
- [ ] Write a user-defined type guard function
- [ ] Build a discriminated union for API response states
- [ ] Complete all exercises in `exercises.ts`
