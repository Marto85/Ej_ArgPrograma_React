import biciImage from '../src/imgs/bici.jpg';

const ProductDetail = ({ name, description, price, sku, quantity }) => {
    return (
        <div>
            <img src={biciImage} className="card-img-top" alt="bici" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">SKU: {sku}</p>
                <p className="card-text">Cantidad Disponible: {quantity}</p>
            </div>
        </div>
    );
};

export default ProductDetail;