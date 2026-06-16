import React, { useState, useEffect } from 'react';

export default function Home({ showPage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: '/img/Gemini_Generated_Image_wrh5nfwrh5nfwrh5.png',
      tag: 'Doces Mirahy',
      title: (
        <>
          De Minas Gerais<br />
          <em> para a sua mesa!</em>
        </>
      ),
      desc: 'Cada peça é cuidadosamente elaborada com ingredientes nobres, trazendo uma experiência única de sabor e sofisticação.',
      btns: [
        { label: 'Ver Produtos', page: 'produtos', variant: 'accent' },
        { label: 'Nossa História', page: 'quem-somos', variant: 'outline' },
      ],
    },
    {
      img: '/img/Gemini_Generated_Image_z07knvz07knvz07k.png',
      tag: 'Doces Mirahy',
      title: (
        <>
          Artesanal no sabor,<br />
          <em> industrial na </em>
          <br />
          excelência.
        </>
      ),
      desc: 'O afeto do doce artesanal com o rigor da excelência.',
      btns: [
        { label: 'Comprar Agora', page: 'produtos', variant: 'accent' },
        { label: 'Ver Catálogos', page: 'catalogos', variant: 'outline' },
      ],
    },
    {
      img: '/img/Gemini_Generated_Image_gde7y6gde7y6gde7.png',
      tag: 'Doces Mirahy',
      title: (
        <>
          Da Melhor empresa <br />
          <em> para os </em>
          <br /> Melhores clientes
        </>
      ),
      desc: 'Uma parceria de excelência para quem não aceita menos que o extraordinário!',
      btns: [
        { label: 'Ver Produtos', page: 'produtos', variant: 'accent' },
        { label: 'Fale Conosco', page: 'contato', variant: 'outline' },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const categories = [
    { name: 'Baldes', desc: '4,5kg • 9kg', img: '/img/Gemini_Generated_Image_9ge1ek9ge1ek9ge1 (1).png' },
    { name: 'Potes', desc: '320g • 50g', img: '/img/Gemini_Generated_Image_1kcl1m1kcl1m1kcl (1).png' },
    { name: 'Barras', desc: '300g • 30g • 50g • 7kg', img: '/img/Gemini_Generated_Image_hyt75chyt75chyt7 (1).png' },
    { name: 'Cubos', desc: '200g', img: '/img/Gemini_Generated_Image_uaoppnuaoppnuaop (1).png' },
    { name: 'Forneáveis', desc: 'Balde 9kg', img: '/img/Gemini_Generated_Image_4pntx24pntx24pnt.png' },
    { name: 'Latas', desc: '10kg • 800g', img: '/img/Gemini_Generated_Image_2shau42shau42sha (1).png' },
    { name: 'Diet', desc: '200g • 50g', img: '/img/Gemini_Generated_Image_9f98ar9f98ar9f98.png' },
  ];

  return (
    <div id="homePage">
      {/* CARROSSEL */}
      <div className="carousel-container">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={slide.img} alt={`Doces Mirahy - Banner ${index + 1}`} />
              <div className="carousel-overlay" />
              <div className="carousel-content">
                <div className="carousel-inner">
                  <span className="carousel-tag">{slide.tag}</span>
                  <h1 className="carousel-title">{slide.title}</h1>
                  <p className="carousel-desc">{slide.desc}</p>
                  <div className="hero-btns">
                    {slide.btns.map((btn, bIdx) => (
                      <a
                        key={bIdx}
                        href="#"
                        className={`btn btn-${btn.variant}`}
                        onClick={(e) => {
                          e.preventDefault();
                          showPage(btn.page);
                        }}
                      >
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-btn next" onClick={handleNext}>
          ❯
        </button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="features">
        <div className="features-grid">
          <div className="feature fade-up">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3>Artesanal</h3>
            <p>Feito à mão com carinho e dedicação</p>
          </div>
          <div className="feature fade-up">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <h3>Ingredientes Nobres</h3>
            <p>Matérias-primas selecionadas</p>
          </div>
          <div className="feature fade-up">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3>Entrega Cuidadosa</h3>
            <p>Embalagem especial para todo o Brasil</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DO VÍDEO */}
      <div className="video-section fade-up">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-tag">Conheça nosso trabalho</span>
          <h2 className="section-title">Veja como fazemos</h2>
          <div className="section-line" />
        </div>
        <div className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/fibpUmXtrz4"
            title="Doces Mirahy"
            allowFullScreen
          />
        </div>
      </div>

      {/* CATEGORIAS */}
      <section className="categories">
        <div className="section-header fade-up">
          <span className="section-tag">Nossas Especialidades</span>
          <h2 className="section-title">Categorias</h2>
          <div className="section-line" />
        </div>
        <div className="cats-grid">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="cat-card fade-up"
              onClick={() => showPage('produtos')}
            >
              <div className="cat-img-wrap">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="cat-name">{cat.name}</div>
              <div className="cat-desc">{cat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="quote">
        <blockquote className="fade-up">
          "Doce é coisa séria. Feito com amor, fica ainda melhor!"
          <cite>— Família Mirahy</cite>
        </blockquote>
      </section>
    </div>
  );
}
