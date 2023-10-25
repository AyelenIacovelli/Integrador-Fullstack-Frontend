import React from 'react';
import "../UI/products/productCard.css"
import Button from '../UI/Button/Button';
import "./cardsRecomendacion.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiTwotoneFire } from "react-icons/ai"

const CardRecomendacion = ({ title, img, price, desc, id, pricesale }) => {

    const dispatch = useDispatch();

    const isPriceSale = pricesale !== undefined;

    const handleAddToCart = () => {
        dispatch(addToCart({ title, img, price, desc, id, pricesale }));
        toast.success('Se agregó correctamente el producto al carrito');
    }

    const showOfferFire = isPriceSale ? 'show' : '';

    return (
        <div className='card'>
            <Link to={`/tienda/${id}`}>
                <div className='card-img-container'>
                    {isPriceSale && <span className={`offer-fire ${showOfferFire}`}><AiTwotoneFire /></span>}
                    <img
                        src={img}
                        alt={title}
                        className='card-img'
                    />
                </div>
                <div className='card-text'>
                    <h2 className='card-title'>{title}</h2>
                    <p className='info-price'>{desc}</p>
                    <span className="price">
                        <span className={`price-original ${isPriceSale ? 'strikethrough' : ''}`}>${price}</span>
                        {isPriceSale && <span className="price-sale">${pricesale}</span>}
                    </span>
                </div>
            </Link>
            <Button onClick={handleAddToCart}>Agregar al carrito</Button>
        </div>
    );
};

export default CardRecomendacion;