// src/context/TaskContext.js
import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        // گرفتن دیتا از localStorage
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        // ذخیره دیتا توی localStorage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (text, category) => {
        if (!text.trim()) return;
        const newTask = {
            id: Date.now(),
            text,
            category,
            done: false,
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    };

    const removeTask = (id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const editTask = (id, newText) => {
        const trimmed = (newText ?? "").trim();
        if (!trimmed) return;
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, removeTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => useContext(TaskContext);