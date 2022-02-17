import React, { useState } from 'react';

function FormLogin() {

  const [ _email, setEmail ] = useState('');
  const [ _password, setPassword ] = useState('');

  return (
    <div>
      <h1>Login</h1>
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
        type="button"
        data-testid="product-add-to-cart"
      >
        entrar
      </button>
    </div>
  )
}

export default FormLogin;