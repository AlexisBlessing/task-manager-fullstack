import { useState } from "react";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom"; // <- Asegúrate de importar Link
import "./Login.css";

export default function Login() {
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await api.post("/auth/login", form);
            login(res.data);
            window.location.href = "/tasks";
        } catch (err) {
            setError(err.response?.data?.message || "Error al iniciar sesión");
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>

                {error && <p className="login-error">{error}</p>}

                <form onSubmit={handleSubmit} className="login-form">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Ingresar</button>
                </form>

                <p className="login-register">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
                </p>

                <Link to="/" className="btn-home">🏠 Volver al Home</Link>
            </div>
        </div>
    );
}

