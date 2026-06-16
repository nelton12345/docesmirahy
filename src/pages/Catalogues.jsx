import React from 'react';

export default function Catalogues() {
  const catalogs = [
    {
      id: 1,
      img: '/img/Gemini_Generated_Image_9ge1ek9ge1ek9ge1 (1).png',
      title: 'Coleção Baldes Especiais',
      desc: 'Baldes com doces selecionados',
    },
    {
      id: 2,
      img: '/img/Gemini_Generated_Image_rt9p97rt9p97rt9p (1).png',
      title: 'Linha Potes Gourmet',
      desc: 'Potes cremosos e irresistíveis',
    },
    {
      id: 3,
      img: '/img/Gemini_Generated_Image_2shau42shau42sha (1).png',
      title: 'Edição Limitada - Latas',
      desc: 'Latas especiais para presentear',
    },
  ];

  return (
    <div id="catalogosPage">
      <div className="page-header">
        <h1>Catálogos</h1>
        <p>Conheça nossas coleções e edições especiais</p>
      </div>
      <div className="catalogos-grid">
        {catalogs.map((catalog) => (
          <div className="catalogo-card fade-up" key={catalog.id}>
            <img src={catalog.img} alt="Catálogo" />
            <div className="catalogo-card-content">
              <h3 className="catalogo-title">{catalog.title}</h3>
              <p className="blog-excerpt">{catalog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
