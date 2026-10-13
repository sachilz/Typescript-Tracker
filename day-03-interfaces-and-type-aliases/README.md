# 📅 Day 3: Interfaces & Type Aliases

## 🎯 Learning Objectives
- Master the difference between `type` and `interface`
- Learn how to extend interfaces using `extends`
- Learn how to compose types using Intersections (`&`)
- Work with Index Signatures for dynamic dictionary objects
- Understand Declaration Merging in interfaces

---

## 📚 Key Topics
1. **Type Aliases (`type`)**:
   - Useful for unions, primitives, tuples, and function signatures.
   - Example: `type ID = string | number;`
2. **Interfaces (`interface`)**:
   - Ideal for defining object structures and API contracts.
   - Can be extended multiple times.
3. **Extending & Composing**:
   - `interface Admin extends User { role: string; }`
   - `type Admin = User & { role: string; };`
4. **Index Signatures**:
   - Typing objects with unknown keys: `{ [key: string]: number }`

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 3 code:
```bash
npm run day-03
# or
npx tsx day-03-interfaces-and-type-aliases/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Understand when to choose `type` vs `interface`
- [ ] Extend an interface with additional fields
- [ ] Create an intersection type combining two types
- [ ] Implement a dictionary object with index signatures
- [ ] Complete all exercises in `exercises.ts`
