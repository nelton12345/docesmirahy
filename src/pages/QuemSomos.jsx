import React from 'react';

export default function QuemSomos({ showPage }) {
  const handleProductsRedirect = (e) => {
    e.preventDefault();
    showPage('produtos');
  };

  return (
    <div id="quemSomosPage">
      <div className="page-header">
        <h1>Quem Somos</h1>
        <p>Conheça a história da Doces Mirahy</p>
      </div>
      <section className="about">
        <div className="about-container">
          <div className="about-image fade-up">
            <img
              src="https://images.pexels.com/photos/6580449/pexels-photo-6580449.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Nossa história"
            />
          </div>
          <div className="about-content fade-up">
            <span className="section-tag" style={{ textAlign: 'left' }}>
              Sobre Nós
            </span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Conheça a Doces Mirahy
            </h2>
            <div className="section-line" style={{ marginLeft: 0 }}></div>
            <p>Olá, você conhece a Doces Mirahy?</p>
            <p>Atuamos na fabricação de doces há mais de 50 anos.</p>
            <p>Nossos produtos já conquistaram importantes premiações a nível nacional.</p>
            <p>Trabalhamos com diversas embalagens e gramaturas, atendendo tanto aos pequenos varejos quanto aos grandes atacadistas e cozinhas industriais.</p>
            <p>Nossa linha é composta de sabores tradicionais: Doces de leite, goiabada, bananada, cocadas, pé de moleque e outros.</p>
            <p>Nossos produtos são produzidos a partir de leite e frutas in natura conferindo qualidade e sabor sem comparação.</p>
            <p>Produzimos atendendo às normas das boas práticas de fabricação do SIF e ANVISA. Dispomos de pessoal treinado e dos melhores materiais de limpeza e higiene.</p>
            <p>Atendemos a todo Brasil.</p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginTop: '1rem' }}
              onClick={handleProductsRedirect}
            >
              Conheça nossos produtos →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
