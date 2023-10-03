import React from 'react';
import { formatPrice } from '../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';

import "../navbar.css"

const ModalCartCard = ({ img, title, desc, price, quantity, id }) => {

    const dispatch = useDispatch()

    return (
        <div className='product-container'>
            <img
                src={img}
                alt={title}
            />
            <div className='text-container'>
                <h3 className='card-title'>{title}</h3>
                <p className='text'>{desc}</p>
                <span className='price'>{formatPrice(price)}</span>
            </div>
            <div className='quantity-container'>
                <Increase
                    bgColor='var(--btn-gradient-secondary)'
                    onClick={() => dispatch(removeFromCart(id))}
                >
                    {quantity === 1 ? <IoMdTrash /> : <FaMinus />}

                </Increase>
                <Count>{quantity}</Count>
                <Increase onClick={() => dispatch(addToCart({ img, title, desc, price, quantity, id }))}>
                    <BsPlusLg />
                </Increase>
            </div>
        </div>
    );
};

export default ModalCartCard;