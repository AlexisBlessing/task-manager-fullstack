import { useState } from "react";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";

export default function TaskForm({ onCreated }) {
    const { token } = useAuth();
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        await api.post(
            "/tasks",
            { title },
            { headers: { Authorization: `Bearer ${token}` } }
        );

        setTitle("");
        onCreated();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Nueva tarea..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}
