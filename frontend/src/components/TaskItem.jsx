import api from "../api/axios";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import "./TaskItem.css";

export default function TaskItem({ task, onUpdated, onDeleted }) {
    const { token } = useAuth();
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(task.title);

    const save = async () => {
        await api.put(
            `/tasks/${task._id}`,
            { title, status: task.status },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setEditing(false);
        onUpdated();
    };

    const remove = async () => {
        await api.delete(`/tasks/${task._id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        onDeleted();
    };

    const updateStatus = async (e) => {
        const newStatus = e.target.value;
        await api.put(
            `/tasks/${task._id}`,
            { ...task, status: newStatus },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        onUpdated();
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "#fbbf24"; // amarillo
            case "in-progress":
                return "#3b82f6"; // azul
            case "done":
                return "#10b981"; // verde
            default:
                return "#9ca3af"; // gris
        }
    };

    return (
        <li className="task-item">
            {editing ? (
                <>
                    <input
                        className="task-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button className="task-btn save" onClick={save}>Guardar</button>
                    <button className="task-btn cancel" onClick={() => setEditing(false)}>Cancelar</button>
                </>
            ) : (
                <>
                    <span className="task-title">{task.title}</span>
                    <select
                        className="task-status"
                        value={task.status}
                        onChange={updateStatus}
                        style={{ backgroundColor: getStatusColor(task.status), color: "white" }}
                    >
                        <option value="pending">Pendiente</option>
                        <option value="in-progress">En progreso</option>
                        <option value="done">Terminada</option>
                    </select>
                    <button className="task-btn edit" onClick={() => setEditing(true)}>Editar</button>
                    <button className="task-btn delete" onClick={remove}>Eliminar</button>
                </>
            )}
        </li>
    );
}
