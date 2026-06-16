import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import Products from './pages/Products';
import QuemSomos from './pages/QuemSomos';
import Blog from './pages/Blog';
import Recipes from './pages/Recipes';
import Catalogues from './pages/Catalogues';
import Contact from './pages/Contact';
import Budget from './pages/Budget';

export default function App() {
  const [page, setPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastTimeoutId, setToastTimeoutId] = useState(null);

  // Scroll to top on page navigation
  const showPage = (pageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toast feedback notifications
  const showToast = (message) => {
    // Clear any pending timeout
    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }
    setToastMessage(message);
    const timeout = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
    setToastTimeoutId(timeout);
  };

  // Shopping cart handlers
  const addToCart = (name, price) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.name === name);
      if (existing) {
        return prevCart.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { name, price, qty: 1 }];
      }
    });
    showToast(`"${name}" adicionado ao carrinho!`);
    setCartOpen(true);
  };

  const changeQty = (name, delta) => {
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.name === name);
      if (!item) return prevCart;

      const newQty = item.qty + delta;
      if (newQty <= 0) {
        return prevCart.filter((i) => i.name !== name);
      } else {
        return prevCart.map((i) =>
          i.name === name ? { ...i, qty: newQty } : i
        );
      }
    });
  };

  const finalizarPedido = () => {
    if (cart.length === 0) {
      showToast('Seu carrinho está vazio!');
      return;
    }
    showToast('Pedido finalizado! Em breve entraremos em contato.');
    setCart([]);
    setCartOpen(false);
  };

  // Intersection Observer for fade-up animations (triggers when navigation updates page)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, idx * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [page]);

  // Render current active page
  const renderActivePage = () => {
    switch (page) {
      case 'home':
        return <Home showPage={showPage} />;
      case 'produtos':
        return <Products addToCart={addToCart} />;
      case 'quem-somos':
        return <QuemSomos showPage={showPage} />;
      case 'blog':
        return <Blog />;
      case 'receitas':
        return <Recipes />;
      case 'catalogos':
        return <Catalogues />;
      case 'contato':
        return <Contact showToast={showToast} />;
      case 'orcamento':
        return <Budget showToast={showToast} />;
      default:
        return <Home showPage={showPage} />;
    }
  };

  return (
    <>
      <Navbar
        currentPage={page}
        showPage={showPage}
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        onCartOpen={() => setCartOpen(true)}
      />

      {renderActivePage()}

      <Footer showPage={showPage} />

      <CartDrawer
        cart={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        changeQty={changeQty}
        onCheckout={finalizarPedido}
      />

      <Toast message={toastMessage} />
    </>
  );
}
