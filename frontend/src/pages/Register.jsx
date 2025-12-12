import { useState } from "react";
import api from "../api/axios";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await api.post("/auth/register", form);
            login(res.data);
            window.location.href = "/tasks";
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrarse");
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Crear Cuenta</h2>

                {error && <p className="register-error">{error}</p>}

                <form onSubmit={handleSubmit} className="register-form">
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

                    <button type="submit">Registrarse</button>
                </form>

                <p className="register-login">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </p>

                <Link to="/" className="btn-home">🏠 Volver al Home</Link>
            </div>
        </div>
    );
}
