import React, { useState } from 'react';

export default function Budget({ showToast }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [produto, setProduto] = useState('Baldes');
  const [quantidade, setQuantidade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Solicitação enviada! Entraremos em contato em breve.');
    setNome('');
    setEmail('');
    setTelefone('');
    setProduto('Baldes');
    setQuantidade('');
    setMensagem('');
  };

  return (
    <div id="orcamentoPage">
      <div className="page-header">
        <h1>Orçamento</h1>
        <p>Solicite um orçamento personalizado para sua ocasião especial</p>
      </div>
      <section className="orcamento-section">
        <div className="orcamento-container">
          <form id="orcamentoForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome completo</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input
                type="tel"
                placeholder="(31) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Produto de interesse</label>
              <select
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
              >
                <option>Baldes</option>
                <option>Potes</option>
                <option>Barras</option>
                <option>Cubos</option>
                <option>Forneáveis</option>
                <option>Latas</option>
                <option>Diet</option>
              </select>
            </div>
            <div className="form-group">
              <label>Quantidade estimada</label>
              <input
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mensagem / Observações</label>
              <textarea
                placeholder="Conte-nos mais sobre o que você precisa..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-submit">
              Solicitar Orçamento
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
