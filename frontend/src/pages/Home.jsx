import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Bienvenido al Gestor de Tareas</h1>
            <p className="home-subtitle">Selecciona una opción para continuar:</p>

            <nav className="home-nav">
                <Link className="home-btn" to="/login">Iniciar Sesión</Link>
                <Link className="home-btn secondary" to="/register">Registrarse</Link>
            </nav>
        </div>
    );
};

export default Home;