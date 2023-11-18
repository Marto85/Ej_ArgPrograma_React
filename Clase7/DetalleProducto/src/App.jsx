
import { useState } from 'react';
import ProductDetail from './ProductDetail';
import './App.css';

function App() {
  const productData = {
    name: 'Bicicleta Oxea Riddich',
    description: 'Bicicleta marca Oxea mod. Riddich. MTB. Rodado 29"',
    price: 200000.00,
    sku: 'SKU123',
    quantity: 10,
  };

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleBuyButtonClick = () => {
    setShowThankYouMessage(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="card" style={{ width: '18rem' }}>
        <ProductDetail {...productData} />
        <button className="btn btn-primary" onClick={handleBuyButtonClick}>
          Comprar
        </button>
        {showThankYouMessage && <p>Gracias por su compra</p>}
      </div>
    </div>
  );
}

export default App;