import React from 'react';
// import { formatPrice } from '../../utils/index';
import "../UI/products/productCard.css"

import Button from '../UI/Button/Button';

import "./cardsRecomendacion.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

import { toast } from 'react-toastify'

const CardRecomendacion = ({ title, img, price, desc, id, pricesale }) => {

    const dispatch = useDispatch();

    const isPriceSale = pricesale !== undefined;

    const handleAddToCart = () => {
        dispatch(addToCart({ title, img, price, desc, id, pricesale }));
        toast.success('Se agregó correctamente el producto al carrito');
    }

    return (
        <div className='card'>
            <img
                src={img}
                alt={title}
                className='card-img'
            />
            <div className='card-text'>
                <h2 className='card-title'>{title}</h2>
                <p className='info-price'>{desc}</p>
                <span className="price">
                    <span className={`price-original ${isPriceSale ? 'strikethrough' : ''}`}>${price}</span>
                    {isPriceSale && <span className="price-sale">${pricesale}</span>}
                </span>
            </div>
            <Button onClick={handleAddToCart}>Agregar</Button>
        </div>
    );
};

export default CardRecomendacion;