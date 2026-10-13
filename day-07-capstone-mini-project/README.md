# 📅 Day 7: Capstone Mini-Project (TypeScript Study & Task Tracker)

## 🎯 Learning Objectives
- Consolidate all concepts learned from Day 1 to Day 6
- Build a real, runnable TypeScript console application
- Practice clean code architecture and modular TypeScript patterns
- Demonstrate mastery of interfaces, generics, utility types, and OOP

---

## 🏗️ Project Overview
The **Study & Task Tracker** is a modular TypeScript application that manages study goals, daily tasks, and progress logging.

### Architectural Highlights:
1. **Strong Domain Models**: Types for Status, Priorities, Categories.
2. **Generic Repository Interface**: `Repository<T>` pattern for CRUD operations.
3. **Class Implementation**: `InMemoryRepository<T>` and `StudyTrackerService`.
4. **Utility Types**: `Omit<Task, "id" | "createdAt">` for task creation DTOs.
5. **Discriminated Unions**: Result types (`Success<T> | Failure`) for functional error handling.

---

## 💻 Running the Capstone Project
```bash
npm run day-07
# or
npx tsx day-07-capstone-mini-project/tracker.ts
```

---

## ✅ Capstone Checklist
- [ ] Run the tracker and observe the output
- [ ] Add a new feature: task priority filtering or search
- [ ] Implement a statistics reporter (completed tasks ratio)
- [ ] Run `npm run build` (`tsc`) to verify complete zero-error compilation across the whole repo!
