import React from 'react';
import { formatPrice } from '../../../utils';

import CardProductCheckout from '../CardProductCheckout/CardProductCheckout';

// import "./productsCheckout.css"


const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
    return (
        <div className='productos-container'>
            <h2 className='products-title'>Tu pedido</h2>
            <div className='cards-wrapper'>

                {
                    cartItems.length ? (
                        cartItems.map((item) => {
                            return <CardProductCheckout {...item} key={item.id} />
                        })

                    )
                        : (
                            <p>No seas amarrete, comprá algo</p>
                        )
                }


            </div>
            <div className='price-container'>
                <div className='subtotal'>
                    <p>Subtotal</p>
                    <span>{formatPrice(price)}</span>
                </div>
                <div className='subtotal envio'>
                    <p>Envío:</p>
                    <span>{formatPrice(shippingCost)}</span>
                </div>
                <div className='subtotal total'>
                    <p>Total:</p>
                    <span className='price-total'>{formatPrice(price + shippingCost)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductsCheckout;