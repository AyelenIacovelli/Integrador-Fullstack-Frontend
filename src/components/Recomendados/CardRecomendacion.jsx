import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import "./cardsRecomendacion.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const CardRecomendacion = ({ title, img, price, desc, id }) => {

    const dispatch = useDispatch();

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
                <span className='card-price'>{formatPrice(price)}</span>
            </div>
            <Button onClick={() => dispatch(addToCart({ title, img, price, desc, id }))}>Agregar</Button>
        </div>
    );
};

export default CardRecomendacion;