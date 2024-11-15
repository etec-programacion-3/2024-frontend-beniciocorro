import React, { useState } from 'react';
import { FaTimes, FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import './LoginModal.css';
import NintendoLogo from '../media/Nintendo.png';

const LoginModal = ({ onClose, onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isRegistering) {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        
        // Registro de usuario
        const registerResponse = await axios.post('http://192.168.44.110:3000/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        
        onLogin(registerResponse.data.user);
      } else {
        // Login de usuario
        const loginResponse = await axios.post('http://192.168.44.110:3000/login', {
          email: formData.email,
          password: formData.password
        });

        // Guardar el token en localStorage
        localStorage.setItem('token', loginResponse.data.token);
        
        // Configurar el token para futuras peticiones
        axios.defaults.headers.common['Authorization'] = `Bearer ${loginResponse.data.token}`;
        
        onLogin(loginResponse.data.user);
      }
      
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
            <img 
              src={NintendoLogo}
              alt="Nintendo" 
              style={{ 
                width: '150px',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
          <h2>{isRegistering ? 'Create Account' : 'Sign In'}</h2>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          {isRegistering && (
            <div className="form-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
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
              placeholder="Email"
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
              placeholder="Password"
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
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button" 
            disabled={isLoading}
          >
            {isLoading 
              ? 'Loading...' 
              : (isRegistering ? 'Sign Up' : 'Sign In')
            }
          </button>
        </form>

        <div className="form-footer">
          <p>
            {isRegistering 
              ? 'Already have an account?' 
              : "Don't have an account?"}
            <button 
              className="toggle-form-button"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal; 