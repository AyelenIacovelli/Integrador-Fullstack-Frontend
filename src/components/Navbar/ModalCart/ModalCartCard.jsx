import React from 'react';
// import { formatPrice } from '../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';

import "../navbar.css"

const ModalCartCard = ({ img, title, desc, price, quantity, id, pricesale }) => {

    const dispatch = useDispatch()
    const isPriceSale = pricesale !== undefined; // Comprueba si 'pricesale' está definido

    const handleRemoveItem = () => {
        if (quantity === 1) {
            const confirmed = window.confirm('¿Estás seguro que deseas eliminar este producto del carrito?');
            if (confirmed) {
                dispatch(removeFromCart(id));
            }
        } else {
            dispatch(removeFromCart(id));
        }
    };


    return (
        <div className='product-container'>
            <img
                src={img}
                alt={title}
            />
            <div className='text-container'>
                <h3 className='card-title-h3'>{title}</h3>
                <p className='text modalcart-p'>{desc}</p>
                <span className="price modalcart-span">
                    <span className={`price-original ${isPriceSale ? 'strikethrough' : ''}`}>${price}</span>
                    {isPriceSale && <span className="price-sale">${pricesale}</span>}
                </span>
            </div>
            <div className='quantity-container'>
                <Increase

                    onClick={handleRemoveItem}
                >
                    {quantity === 1 ? <IoMdTrash /> : <FaMinus />}

                </Increase>
                <Count>{quantity}</Count>
                <Increase onClick={() => dispatch(addToCart({ img, title, desc, price, quantity, id, pricesale }))}>
                    <BsPlusLg />
                </Increase>
            </div>
        </div>
    );
};

export default ModalCartCard;