import React, { useState } from 'react';

export default function Products({ addToCart }) {
  const [activeFilter, setActiveFilter] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'baldes', label: 'Baldes' },
    { id: 'potes', label: 'Potes' },
    { id: 'barras', label: 'Barras' },
    { id: 'cubos', label: 'Cubos' },
    { id: 'forneaveis', label: 'Forneáveis' },
    { id: 'latas', label: 'Latas' },
    { id: 'diet', label: 'Diet' },
  ];

  const productsList = [
    // BALDES
    {
      id: 1,
      categoria: 'baldes',
      catLabel: 'Baldes',
      name: 'Doce de Leite com Amendoim Cremoso Caixa 2un',
      peso: '4,5kg',
      price: 89.90,
      img: '/img/Gemini_Generated_Image_4pntx24pntx24pnt.png',
    },

    {
      id: 2,
      categoria: 'baldes',
      catLabel: 'Baldes',
      name: 'Cocada Branca Cremosa 4,5kg  Caixa 2un',
      peso: '4,5kg',
      price: 89.90,
      img: 'public/img/Gemini_Generated_Image_g2gczsg2gczsg2gc.png',
    },
     {
      id: 3,
      categoria: 'baldes',
      catLabel: 'Baldes',
      name: 'Doce de Leite com Ameixa Cremoso 4,5kg  Caixa 2 un',
      peso: '4,5kg',
      price: 89.90,
      img: 'public/img/Gemini_Generated_Image_81uij781uij781ui.png',
    },
     {
      id: 4,
      categoria: 'baldes',
      catLabel: 'Baldes',
      name: 'Doce de Mamao Ralado Cremoso 4,5kg  Caixa 2un',
      peso: '4,5kg',
      price: 89.90,
      img: 'public/img/Gemini_Generated_Image_vekhagvekhagvekh.png',
    },
    // POTES
    {
      id: 5,
      categoria: 'potes',
      catLabel: 'Potes',
      name: 'Cocada Branca Cremosa 320g  Caixa 6un',
      peso: '320g',
      price: 29.90,
      img: '/img/Gemini_Generated_Image_1kcl1m1kcl1m1kcl (1).png',
    },
    {
      id: 6,
      categoria: 'potes',
      catLabel: 'Potes',
      name: 'Cocada Morena Cremosa 320g  Caixa 6un',
      peso: '320g',
      price: 29.90,
      img: 'public/img/Gemini_Generated_Image_3fzz7u3fzz7u3fzz.png',
    },
    {
      id: 7,
      categoria: 'potes',
      catLabel: 'Potes',
      name: 'Bananada Cremosa 50g  Display 24un',
      peso: '50g',
      price: 29.90,
      img: 'public/img/Gemini_Generated_Image_ep064mep064mep06.png',
    },
    // BARRAS
    {
      id: 8,
      categoria: 'barras',
      catLabel: 'Barras',
      name: 'Bananada Barra 300g Caixa 8un',
      peso: '300g',
      price: 15.90,
      img: '/img/Gemini_Generated_Image_hyt75chyt75chyt7 (1).png',
    },
    {
      id: 9,
      categoria: 'barras',
      catLabel: 'Barras',
      name: 'Doce de Leite Barra 30g  Caixa 70un',
      peso: '30g',
      price: 3.90,
      img: 'public/img/Gemini_Generated_Image_8ygjti8ygjti8ygj.png',
    },
    {
      id: 10,
      categoria: 'barras',
      catLabel: 'Barras',
      name: 'Doce de Leite Barra 50g  Caixa 50un',
      peso: '50g',
      price: 5.90,
      img: 'public/img/Gemini_Generated_Image_x4xja5x4xja5x4xj.png',
    },
    {
      id: 11,
      categoria: 'barras',
      catLabel: 'Barras',
      name: 'Bananada Barra 50g  Caixa 8un',
      peso: '50g',
      price: 129.90,
      img: '/img/Gemini_Generated_Image_hyt75chyt75chyt7 (1).png',
    },
    // CUBOS
    {
      id: 12,
      categoria: 'cubos',
      catLabel: 'Cubos',
      name: 'Cubos Sortidos',
      peso: '200g',
      price: 12.90,
      img: '/img/Gemini_Generated_Image_uaoppnuaoppnuaop (1).png',
    },
    // FORNEÁVEIS
    {
      id: 13,
      categoria: 'forneaveis',
      catLabel: 'Forneáveis',
      name: 'Balde Forneável',
      peso: '9kg',
      price: 149.90,
      img: 'public/img/Gemini_Generated_Image_9ge1ek9ge1ek9ge1 (1).png',
    },
    // LATAS
    {
      id: 14,
      categoria: 'latas',
      catLabel: 'Latas',
      name: 'Bananada Cremosa 10kg  Caixa 2un',
      peso: '10kg',
      price: 89.90,
      img: '/img/Gemini_Generated_Image_2shau42shau42sha (1).png',
    },
    {
      id: 15,
      categoria: 'latas',
      catLabel: 'Latas',
      name: 'Cocada Morena Cremosa 10kg  Caixa 2un',
      peso: '10Kg',
      price: 39.90,
      img: 'public/img/imG/Gemini_Generated_Image_kfwtb4kfwtb4kfwt.png',
    },
    // DIET
    {
      id: 16,
      categoria: 'diet',
      catLabel: 'Diet',
      name: 'Doce Diet',
      peso: '200g',
      price: 14.90,
      img: 'public/img/imG/Gemini_Generated_Image_3zk8a83zk8a83zk8.png',
    },
    {
      id: 17,
      categoria: 'diet',
      catLabel: 'Diet',
      name: 'Doce de Leite Diet Cremoso 50g  Display 24un',
      peso: '50g',
      price: 5.90,
      img: 'public/img/Gemini_Generated_Image_9f98ar9f98ar9f98.png',
    },
  ];

  const filteredProducts = activeFilter === 'todos'
    ? productsList
    : productsList.filter(p => p.categoria === activeFilter);

  const formatPrice = (price) => {
    return 'R$ ' + price.toFixed(2).replace('.', ',');
  };

  return (
    <div id="produtosPage">
      <div className="page-header">
        <h1>Nossos Produtos</h1>
        <p>Selecionados com cuidado para proporcionar momentos inesquecíveis</p>
      </div>

      <div className="filters-section">
        <div className="filters-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="produtos-grid" id="produtosGrid">
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
            data-categoria={product.categoria}
            style={{
              opacity: 1,
              transform: 'scale(1)',
              display: 'block'
            }}
          >
            <img className="product-img" src={product.img} alt={product.name} />
            <div className="product-info">
              <div className="product-cat">{product.catLabel}</div>
              <div className="product-name">{product.name}</div>
              <div className="product-peso">{product.peso}</div>
              <div className="product-price">{formatPrice(product.price)}</div>
              <button
                className="btn-add"
                onClick={() => addToCart(product.name, product.price)}
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
