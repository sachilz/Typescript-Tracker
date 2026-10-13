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

console.log("==================================================");
console.log("🚀 TYPESCRIPT LEARNING TRACKER - CAPSTONE SYSTEM");
console.log("==================================================\n");

// --- 1. DOMAIN MODELS & TYPES ---
export type Priority = "low" | "medium" | "high";
export type TaskStatus = "pending" | "in_progress" | "completed";

export interface Identifiable {
  id: string;
}

export interface StudyTask extends Identifiable {
  title: string;
  dayNumber: number;
  priority: Priority;
  status: TaskStatus;
  estimatedHours: number;
  notes?: string;
  createdAt: Date;
}

// Utility Types
export type CreateTaskDTO = Omit<StudyTask, "id" | "createdAt">;
export type UpdateTaskDTO = Partial<Omit<StudyTask, "id" | "createdAt">>;

// Discriminated Union for Result Pattern
export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// --- 2. GENERIC REPOSITORY INTERFACE ---
export interface IRepository<T extends Identifiable> {
  create(item: T): void;
  getById(id: string): T | undefined;
  getAll(): T[];
  update(id: string, updates: Partial<T>): boolean;
  delete(id: string): boolean;
}

// --- 3. GENERIC IN-MEMORY REPOSITORY IMPLEMENTATION ---
export class InMemoryRepository<T extends Identifiable> implements IRepository<T> {
  private items = new Map<string, T>();

  create(item: T): void {
    this.items.set(item.id, item);
  }

  getById(id: string): T | undefined {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  update(id: string, updates: Partial<T>): boolean {
    const existing = this.items.get(id);
    if (!existing) return false;

    this.items.set(id, { ...existing, ...updates });
    return true;
  }

  delete(id: string): boolean {
    return this.items.delete(id);
  }
}

// --- 4. TRACKER SERVICE ---
export class StudyTrackerService {
  constructor(private repo: IRepository<StudyTask>) {}

  addTask(dto: CreateTaskDTO): Result<StudyTask> {
    if (!dto.title.trim()) {
      return { success: false, error: "Task title cannot be empty." };
    }
    if (dto.estimatedHours <= 0) {
      return { success: false, error: "Estimated hours must be greater than 0." };
    }

    const newTask: StudyTask = {
      ...dto,
      id: `task-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date()
    };

    this.repo.create(newTask);
    return { success: true, data: newTask };
  }

  markCompleted(id: string): Result<StudyTask> {
    const task = this.repo.getById(id);
    if (!task) {
      return { success: false, error: `Task with id '${id}' not found.` };
    }

    this.repo.update(id, { status: "completed" });
    return { success: true, data: { ...task, status: "completed" } };
  }

  getStats(): { total: number; completed: number; pending: number; inProgress: number } {
    const all = this.repo.getAll();
    return {
      total: all.length,
      completed: all.filter((t) => t.status === "completed").length,
      pending: all.filter((t) => t.status === "pending").length,
      inProgress: all.filter((t) => t.status === "in_progress").length
    };
  }

  printSummary(): void {
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

// --- 5. DEMO EXECUTION ---
const taskRepo = new InMemoryRepository<StudyTask>();
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
