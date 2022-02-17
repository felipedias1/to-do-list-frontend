import React from 'react';

function FormLogin () {
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Insira seu email"
        name="email"
        data-testid="email-input"
      />
      <input
        type="password"
        placeholder="Insira sua senha"
        name="password"
        data-testid="password-input"
      />
      <button
        onClick={ this.clickButton }
        type="button"
        data-testid="product-add-to-cart"
      >
        entrar
      </button>
    </div>
  )
}

export default FormLogin;