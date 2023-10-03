import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import { formatPrice } from '../../../utils/formatPrice';

import Submit from '../../UI/Submit/Submit';
import Increase from '../../UI/Increase/Increase';
import ModalCartCard from './ModalCartCard';

import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from "../../../redux/slices/cartSlice";

const ModalCart = () => {
    const hiddenCart = useSelector(state => state.cart.hidden)
    const { cartItems, shippingCost } = useSelector(state => state.cart);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const totalPrice = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity)
    }, 0)

    return (
        <>
            {!hiddenCart && (
                <motion.div className='modal-overlay'
                    onClick={() => dispatch(toggleHiddenCart())}

                ></motion.div>
            )}
            <AnimatePresence>
                {!hiddenCart && (
                    <motion.div className='container'
                        initial={{ translateX: 600 }}
                        animate={{ translateX: 0 }}
                        exit={{ translateX: 600 }}
                        transition={{ type: 'spring', damping: 27 }}
                        key='cart-modal'
                    >
                        <div className='close-button-container'>
                            <motion.button
                                className='close-button close__modal'
                                whileTap={{ scale: 0.95 }}
                                onClick={() => dispatch(toggleHiddenCart())}
                            >
                                <MdOutlineClose size='24px' />
                            </motion.button>
                        </div>

                        <div className='main-container'>
                            <div className='title'>
                                <h1>Tus Productos</h1>
                                <Increase
                                    onClick={() => dispatch(clearCart())}
                                    bgColor='var(--magenta)'
                                    disabled={!cartItems.length}
                                >
                                    <IoMdTrash />
                                </Increase>
                            </div>

                            <div className='products-wrapper'>
                                {
                                    cartItems.length ? (
                                        cartItems.map((item) => {
                                            return <ModalCartCard {...item} key={item.id} />
                                        })
                                    ) : (
                                        <p>No seas amarrete, comprá algo.</p>
                                    )
                                }
                            </div>
                        </div>

                        <div className='price-container'>
                            <div className='subtotal'>
                                <p>Subtotal:</p>
                                <span>{formatPrice(totalPrice)}</span>
                            </div>
                            <div className='subtotal'>
                                <p>Envio</p>
                                <span>{formatPrice(shippingCost)}</span>
                            </div>
                            <hr />
                            <div className='subtotal'>
                                <p>Total:</p>
                                <span className='price'>{formatPrice(totalPrice + shippingCost)}</span>
                            </div>
                            <div className='subtotal'>
                                <Submit onClick={() => {
                                    navigate('/checkout');
                                    dispatch(toggleHiddenCart())
                                }}
                                    disabled={!cartItems.length}
                                >
                                    Iniciar pedido
                                </Submit>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ModalCart;