// import React from 'react';
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

  return (
    <div className="app">
      <ProductDetail {...productData} />
    </div>
  );
}

export default App;
