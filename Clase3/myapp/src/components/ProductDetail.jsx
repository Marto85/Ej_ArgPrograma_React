/* eslint-disable react/prop-types */
import React from 'react';

const ProductDetail = ({ name, description, price, sku, quantity }) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>Precio: ${price}</p>
            <p>SKU: {sku}</p>
            <p>Cantidad Disponible: {quantity}</p>
        </div>
    );
};

export default ProductDetail;