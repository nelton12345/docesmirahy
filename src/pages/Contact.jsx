import React, { useState } from 'react';

export default function Contact({ showToast }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Mensagem enviada! Responderemos em breve.');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <div id="contatoPage">
      <div className="page-header">
        <h1>Contato</h1>
        <p>Fale conosco, estamos à disposição!</p>
      </div>
      <div className="contato-info">
        <div className="contato-form fade-up">
          <h3>Envie uma mensagem</h3>
          <form id="contatoForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Seu telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Sua mensagem..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div className="contato-dados fade-up">
          <h3>Informações de Contato</h3>
          <div className="contato-item">
            <svg viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Rua dos Doces, 123 - Belo Horizonte, MG</span>
          </div>
          <div className="contato-item">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>(31) 99999-9999</span>
          </div>
          <div className="contato-item">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>contato@docesmirahy.com.br</span>
          </div>
          <div className="contato-item">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Seg-Sex: 8h às 18h | Sáb: 8h às 12h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
