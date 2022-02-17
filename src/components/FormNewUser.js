import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function FormNewUser() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const navigate = useNavigate();


  const newUser = async (event) => {
    event.preventDefault();

    const dataNewUser = {
      name,
      email,
      password,
    };

    try {
      await api.post('/user', dataNewUser);
      alert('Usuário Cadastrado com Sucesso!') 
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Cadastro Novo Usuário</h1>
      <form onSubmit={newUser}>
        <input
          type="text"
          placeholder="Insira seu nome"
          name="name"
          data-testid="name-input"
          onChange={ event => setName(event.target.value)}
        />
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
          data-testid="user-add"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default FormNewUser;