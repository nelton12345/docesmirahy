import React from 'react';

export default function Recipes() {
  const recipes = [
    {
      id: 1,
      img: 'public/img/imG/Gemini_Generated_Image_hlmkd0hlmkd0hlmk.png',
      meta: 'Fácil | 30min',
      title: 'Torta Suprema de Doce de Leite e Limão',
      desc: 'Ingredientes: leite condensado, chocolate belga, manteiga, granulado especial...',
    },
    {
      id: 2,
      img: 'public/img/imG/Gemini_Generated_Image_k2qwghk2qwghk2qw.png',
      meta: 'Médio | 1h',
      title: 'Doce de Leite Caseiro',
      desc: ' A melhor escolha pra fazer hoje ...',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/6580450/pexels-photo-6580450.jpeg?auto=compress&cs=tinysrgb&w=600',
      meta: 'Fácil | 20min',
      title: 'Cheesecake Sensação de Matcha Oriental',
      desc: 'Sobremesa simples e sofisticada para ocasiões especiais...',
    },
  ];

  return (
    <div id="receitasPage">
      <div className="page-header">
        <h1>Receitas</h1>
        <p>Aprenda a fazer delícias em casa com o toque Mirahy</p>
      </div>
      <div className="receitas-grid">
        {recipes.map((recipe) => (
          <div className="receita-card fade-up" key={recipe.id}>
            <img src={recipe.img} alt="Receita" />
            <div className="receita-card-content">
              <div className="blog-date">{recipe.meta}</div>
              <h3 className="receita-title">{recipe.title}</h3>
              <p className="blog-excerpt">{recipe.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
