import { useEffect, useState } from "react";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import "./Tasks.css";

export default function Tasks() {
    const { token, logout } = useAuth();
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchTasks = async () => {
        const res = await api.get(`/tasks?status=${filter}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(res.data);
    };

    useEffect(() => {
        fetchTasks();
    }, [filter]);

    return (
        <div className="tasks-container">
            <header className="tasks-header">
                <h2>Mis Tareas</h2>
                <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
            </header>

            <div className="tasks-filter">
                <label>Filtrar por estado:</label>
                <select onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="">Todas</option>
                    <option value="pending">Pendientes</option>
                    <option value="in-progress">En progreso</option>
                    <option value="done">Completadas</option>
                </select>
            </div>

            <TaskForm onCreated={fetchTasks} />

            <ul className="tasks-list">
                {tasks.length === 0 && <p className="no-tasks">No hay tareas.</p>}
                {tasks.map((t) => (
                    <TaskItem
                        key={t._id}
                        task={t}
                        onUpdated={fetchTasks}
                        onDeleted={fetchTasks}
                    />
                ))}
            </ul>
        </div>
    );
}

