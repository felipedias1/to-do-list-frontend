import React, { useContext, useState } from 'react';
import api from '../services/api';
import DataContext from '../context/DataContext';

const NewTask = () => {

  const [ text, setText ] = useState('');
  const [ status, setStatus ] = useState('');

  const { userLogin } = useContext(DataContext);
  const { token } = userLogin.dataUser;

  const createTask = async (event) => {
    event.preventDefault();

    const dataNewTask = {
      text,
      status,
    };

    try {
      await api.post('/task', dataNewTask,
      { headers: { authorization: token } })
      alert('Tarefa Cadastrada com Sucesso!')
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h3>Cadastrar Nova Tarefa</h3>
      <form onSubmit={createTask}>
        <input
          type="text"
          placeholder="Descrição da tarefa"
          name="text"
          data-testid="text-input"
          onChange={ event => setText(event.target.value)}
        />
        <select 
          name="status"
          onChange={ event => setStatus(event.target.value)}
          data-testid="status-input"
        >
          <option value="pendente">pendente</option>
          <option value="em andamento">em andamento</option>
          <option value="pronto">pronto</option> 
        </select>
        <button
          type="submit"
          data-testid="task-add"
        >
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default NewTask