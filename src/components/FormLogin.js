import React, { useState, useContext } from 'react';
import api from '../services/api';
import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function FormLogin() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { setUserLogin } = useContext(DataContext);
  const navigate = useNavigate();


  const login = async (event) => {
    event.preventDefault();

    const dataUser = {
      email,
      password,
    };

    try {
      const response = await api.post('/login', dataUser); 
      setUserLogin(response.data);
      console.log(response.data)
      navigate('/tasks');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Insira seu email"
          name="email"
          data-testid="email-input"
          onChange={ event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Insira sua senha"
          name="password"
          data-testid="password-input"
          onChange={ event => setPassword(event.target.value)}
        />
        <button
          type="submit"
          data-testid="user-login"
        >
          entrar
        </button>
      </form>
    </div>
  )
}

export default FormLogin;