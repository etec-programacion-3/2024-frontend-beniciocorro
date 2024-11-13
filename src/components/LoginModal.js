import React, { useState } from 'react';
import { FaTimes, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginModal.css';

const LoginModal = ({ onClose, onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isRegistering) {
      if (formData.password !== formData.confirmPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }
      // Aquí iría la lógica de registro
    }

    // Simulación de login/registro exitoso
    onLogin({
      name: formData.name || 'Usuario',
      email: formData.email
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="modal-header">
          <div className="modal-logo">
            <img src="/nintendo-logo.png" alt="Nintendo" />
          </div>
          <h2>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {isRegistering && (
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          {isRegistering && (
            <div className="form-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button type="submit" className="submit-button">
            {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="form-footer">
          <p>
            {isRegistering 
              ? '¿Ya tienes una cuenta?' 
              : '¿No tienes una cuenta?'}
            <button 
              className="toggle-form-button"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Iniciar sesión' : 'Registrarse'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 