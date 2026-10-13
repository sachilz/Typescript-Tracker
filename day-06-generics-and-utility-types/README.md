# 📅 Day 6: Generics & Built-in Utility Types

## 🎯 Learning Objectives
- Understand why and when to write Generic code
- Create generic functions, interfaces, and classes
- Apply Generic Constraints using `extends`
- Master essential TypeScript Utility Types:
  - `Partial<T>`, `Required<T>`, `Readonly<T>`
  - `Pick<T, K>`, `Omit<T, K>`
  - `Record<K, V>`
  - `ReturnType<T>`, `Parameters<T>`

---

## 📚 Key Topics
1. **Generics Overview**:
   - Reusable components that work with multiple types rather than a single one.
2. **Generic Constraints**:
   - `function logLength<T extends { length: number }>(item: T): number`
3. **Key Built-in Utility Types**:
   - `Partial<T>`: Makes all properties in `T` optional.
   - `Required<T>`: Makes all properties in `T` required.
   - `Readonly<T>`: Makes all properties in `T` readonly.
   - `Pick<T, Keys>`: Constructs a type with subset of properties from `T`.
   - `Omit<T, Keys>`: Constructs a type omitting specified properties from `T`.
   - `Record<Keys, Type>`: Constructs an object type whose property keys are `Keys` and values are `Type`.

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 6 code:
```bash
npm run day-06
# or
npx tsx day-06-generics-and-utility-types/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Write a generic function that preserves return types
- [ ] Constrain a generic type parameter
- [ ] Practice updating an entity using `Partial<T>`
- [ ] Create clean DTOs using `Pick<T, K>` and `Omit<T, K>`
- [ ] Complete all exercises in `exercises.ts`
