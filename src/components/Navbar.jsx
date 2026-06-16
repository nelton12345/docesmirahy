import React, { useState } from 'react';

export default function Navbar({ currentPage, showPage, cartCount, onCartOpen }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    showPage(page);
    setMobileOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'blog', label: 'Blog' },
    { id: 'receitas', label: 'Receitas' },
    { id: 'catalogos', label: 'Catálogos' },
    { id: 'contato', label: 'Contatos' },
    { id: 'orcamento', label: 'Orçamento' },
  ];

  return (
    <nav>
      <div className="nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => handleLinkClick(e, 'home')} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="public/img/imG/public/img/imG/ChatGPT Image 15 de jun. de 2026, 16_53_19.png" alt="Doces Mirahy Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </a>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="#"
                className={currentPage === link.id ? 'active' : ''}
                onClick={(e) => handleLinkClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <button className="nav-cart" onClick={onCartOpen} title="Carrinho">
            <svg viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              className="cart-count"
              style={{ display: cartCount > 0 ? 'flex' : 'none' }}
            >
              {cartCount}
            </span>
          </button>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            title="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href="#"
            className={currentPage === link.id ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
