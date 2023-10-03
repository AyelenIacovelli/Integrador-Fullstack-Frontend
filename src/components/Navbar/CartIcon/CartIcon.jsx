import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import "../navbar.css"
import { toggleHiddenCart } from '../../../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartIcon = () => {
    const totalCartItems = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

    const dispatch = useDispatch();

    return (
        <div className='link-container' onClick={() => dispatch(toggleHiddenCart())}>
            <FaShoppingCart />
            <span>{totalCartItems}</span>
        </div>
    );
};

export default CartIcon;