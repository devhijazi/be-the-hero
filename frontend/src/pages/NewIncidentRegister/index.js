import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            É importante que você descreva o caso detalhadamente para encontrar
            um novo Herói.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home.
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descreva o caso aqui."
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder=" Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar Caso
          </button>
        </form>
      </div>
    </div>
  );
}
