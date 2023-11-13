// import React from 'react';

const ProductDetail = ({ name, description, price, sku, quantity }) => {
    return (
        <div className="product-detail">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>SKU: {sku}</p>
            <p>Cantidad Disponible: {quantity}</p>
        </div>
    );
};

export default ProductDetail;
