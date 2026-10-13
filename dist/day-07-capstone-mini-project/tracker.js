"use strict";
/**
 * =====================================================================
 * Day 7: Capstone Project - TypeScript Study & Task Tracker
 * =====================================================================
 * This mini-project unites all 7 days of concepts:
 * - Primitive & Literal Types
 * - Functions & Closures
 * - Interfaces & Type Aliases
 * - Discriminated Unions (Result Pattern)
 * - Classes & Access Modifiers
 * - Generics & Generic Repositories
 * - Built-in Utility Types (Omit, Partial, Readonly)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyTrackerService = exports.InMemoryRepository = void 0;
console.log("==================================================");
console.log("🚀 TYPESCRIPT LEARNING TRACKER - CAPSTONE SYSTEM");
console.log("==================================================\n");
// --- 3. GENERIC IN-MEMORY REPOSITORY IMPLEMENTATION ---
class InMemoryRepository {
    items = new Map();
    create(item) {
        this.items.set(item.id, item);
    }
    getById(id) {
        return this.items.get(id);
    }
    getAll() {
        return Array.from(this.items.values());
    }
    update(id, updates) {
        const existing = this.items.get(id);
        if (!existing)
            return false;
        this.items.set(id, { ...existing, ...updates });
        return true;
    }
    delete(id) {
        return this.items.delete(id);
    }
}
exports.InMemoryRepository = InMemoryRepository;
// --- 4. TRACKER SERVICE ---
class StudyTrackerService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    addTask(dto) {
        if (!dto.title.trim()) {
            return { success: false, error: "Task title cannot be empty." };
        }
        if (dto.estimatedHours <= 0) {
            return { success: false, error: "Estimated hours must be greater than 0." };
        }
        const newTask = {
            ...dto,
            id: `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            createdAt: new Date()
        };
        this.repo.create(newTask);
        return { success: true, data: newTask };
    }
    markCompleted(id) {
        const task = this.repo.getById(id);
        if (!task) {
            return { success: false, error: `Task with id '${id}' not found.` };
        }
        this.repo.update(id, { status: "completed" });
        return { success: true, data: { ...task, status: "completed" } };
    }
    getStats() {
        const all = this.repo.getAll();
        return {
            total: all.length,
            completed: all.filter((t) => t.status === "completed").length,
            pending: all.filter((t) => t.status === "pending").length,
            inProgress: all.filter((t) => t.status === "in_progress").length
        };
    }
    printSummary() {
        const all = this.repo.getAll();
        console.log("📋 Current Study Tasks List:");
        all.forEach((task) => {
            const statusIcon = task.status === "completed" ? "✅" : task.status === "in_progress" ? "⏳" : "📌";
            console.log(`  ${statusIcon} [Day ${task.dayNumber}] ${task.title} (${task.priority.toUpperCase()}) - ${task.status}`);
        });
        const stats = this.getStats();
        console.log("\n📊 Progress Summary:");
        console.log(`  - Total Tasks:      ${stats.total}`);
        console.log(`  - Completed:        ${stats.completed}`);
        console.log(`  - In Progress:      ${stats.inProgress}`);
        console.log(`  - Pending:          ${stats.pending}`);
    }
}
exports.StudyTrackerService = StudyTrackerService;
// --- 5. DEMO EXECUTION ---
const taskRepo = new InMemoryRepository();
const tracker = new StudyTrackerService(taskRepo);
// Seed initial week plan
const task1 = tracker.addTask({
    title: "TypeScript Basics & Environment Setup",
    dayNumber: 1,
    priority: "high",
    status: "completed",
    estimatedHours: 2
});
const task2 = tracker.addTask({
    title: "Master Functions, Objects, Arrays & Tuples",
    dayNumber: 2,
    priority: "high",
    status: "completed",
    estimatedHours: 2.5
});
const task3 = tracker.addTask({
    title: "Interfaces, Type Aliases & Intersection",
    dayNumber: 3,
    priority: "high",
    status: "in_progress",
    estimatedHours: 3
});
const task4 = tracker.addTask({
    title: "Unions, Literals & Type Narrowing Guards",
    dayNumber: 4,
    priority: "medium",
    status: "pending",
    estimatedHours: 2.5
});
const task5 = tracker.addTask({
    title: "Classes, Access Modifiers & OOP Patterns",
    dayNumber: 5,
    priority: "medium",
    status: "pending",
    estimatedHours: 3
});
const task6 = tracker.addTask({
    title: "Generics & Built-in Utility Types",
    dayNumber: 6,
    priority: "high",
    status: "pending",
    estimatedHours: 3.5
});
const task7 = tracker.addTask({
    title: "Build Capstone CLI Tracker & Review",
    dayNumber: 7,
    priority: "high",
    status: "pending",
    estimatedHours: 4
});
tracker.printSummary();
console.log("\n🎉 Capstone tracker initialized successfully!");
