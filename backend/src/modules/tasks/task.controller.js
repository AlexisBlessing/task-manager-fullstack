import { getTasks, createTask, updateTask, deleteTask } from "./task.service.js";

export const listTasks = async (req, res) => {
    try {
        const tasks = await getTasks(req.user._id, req.query.status);
        res.json(tasks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const addTask = async (req, res) => {
    try {
        const task = await createTask(req.user._id, req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const editTask = async (req, res) => {
    try {
        const task = await updateTask(req.params.id, req.user._id, req.body);
        res.json(task);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const removeTask = async (req, res) => {
    try {
        await deleteTask(req.params.id, req.user._id);
        res.json({ message: "Tarea eliminada" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
