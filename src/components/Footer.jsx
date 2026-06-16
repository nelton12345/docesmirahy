import React from 'react';

export default function Footer({ showPage }) {
  const handleLinkClick = (e, page) => {
    e.preventDefault();
    showPage(page);
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Doces Mirahy</h3>
          <p>
           Feitos com amor e ingredientes selecionados. Tudo do
            bom e do melhor!
          </p>
          <div className="footer-social">
            <a href="#" title="Instagram">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <h4>Navegação</h4>
          <a href="#" onClick={(e) => handleLinkClick(e, 'home')}>
            Início
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'produtos')}>
            Produtos
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'quem-somos')}>
            Quem Somos
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'blog')}>
            Blog
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'receitas')}>
            Receitas
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'catalogos')}>
            Catálogos
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'contato')}>
            Contatos
          </a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'orcamento')}>
            Orçamento
          </a>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Rua dos Doces, 123 — Belo Horizonte, MG
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            (31) 988764367
          </div>
          <div className="footer-contact-item">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contato@docesmirahy.com.br
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Doces Mirahy — Tudo do bom E do melhor. Todos os direitos reservados.
      </div>
    </footer>
  );
}
