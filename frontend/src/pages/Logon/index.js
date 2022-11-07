import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (e) {
      alert('Falha no login');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="Be the Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu login.</h1>
          <input
            placeholder=" Entre com seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Desejo me cadastrar.
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
export default Logon;
