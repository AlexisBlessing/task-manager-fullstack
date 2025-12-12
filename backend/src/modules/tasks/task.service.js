import Task from "../../models/task.model.js";

export const getTasks = async (userId, status) => {
    const query = { user: userId };
    if (status) query.status = status;

    return await Task.find(query).sort({ createdAt: -1 });
};

export const createTask = async (userId, data) => {
    return await Task.create({ ...data, user: userId });
};

export const updateTask = async (taskId, userId, data) => {
    const task = await Task.findOneAndUpdate(
        { _id: taskId, user: userId },
        data,
        { new: true }
    );
    if (!task) throw new Error("Tarea no encontrada");
    return task;
};

export const deleteTask = async (taskId, userId) => {
    const task = await Task.findOneAndDelete({
        _id: taskId,
        user: userId,
    });
    if (!task) throw new Error("Tarea no encontrada");
    return true;
};
