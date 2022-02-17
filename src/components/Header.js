import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Header = () => {

  const { userLogin } = useContext(DataContext);
  const { name } = userLogin.dataUser;

  return (
    <div>
      <h2> Boas vindas {name}</h2>
    </div>
  )
}

export default Header