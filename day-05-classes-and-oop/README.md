# 📅 Day 5: Classes & Object-Oriented Programming (OOP)

## 🎯 Learning Objectives
- Master TypeScript Class syntax and features
- Use Access Modifiers (`public`, `private`, `protected`)
- Leverage Constructor Parameter Properties shorthand
- Implement Getters and Setters with type safety
- Implement Interfaces using `implements`
- Create and inherit from Abstract Classes

---

## 📚 Key Topics
1. **Access Modifiers**:
   - `public`: Accessible anywhere (default).
   - `private`: Accessible only within the declaring class.
   - `protected`: Accessible within the declaring class and its subclasses.
2. **Constructor Parameter Properties**:
   - Shorthand syntax: `constructor(public name: string, private secret: string)`
3. **Getters & Setters**:
   - Encapsulation with control over reads and mutations.
4. **Implementing Interfaces**:
   - Enforcing contracts on classes: `class Dog implements Animal`
5. **Abstract Classes**:
   - Blueprints that cannot be directly instantiated. Provide common base functionality.

---

## 💻 Practice Exercises
Open [`exercises.ts`](./exercises.ts) and complete the tasks.

### Run Day 5 code:
```bash
npm run day-05
# or
npx tsx day-05-classes-and-oop/exercises.ts
```

---

## ✅ Daily Checklist
- [ ] Understand `public`, `private`, and `protected` differences
- [ ] Use parameter properties shorthand in constructors
- [ ] Implement an interface in a class
- [ ] Create an abstract class with an abstract method
- [ ] Complete all exercises in `exercises.ts`
