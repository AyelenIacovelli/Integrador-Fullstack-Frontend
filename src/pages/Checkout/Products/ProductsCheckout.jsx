import React from 'react';
import { formatPrice } from '../../../utils';

import CardProductCheckout from '../CardProductCheckout/CardProductCheckout';

import "../checkout.css"


const ProductsCheckout = ({ cartItems, shippingCost, price }) => {
    return (
        <div className='productos-container-checkout'>
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
            <div className='price-container-checkout'>
                <div className='subtotal-checkout'>
                    <p>Subtotal</p>
                    <span>{formatPrice(price)}</span>
                </div>
                <div className='subtotal-checkout envio'>
                    <p>Envío:</p>
                    <span>{formatPrice(shippingCost)}</span>
                </div>
                <div className='subtotal-checkout total'>
                    <p>Total:</p>
                    <span className='price-total-checkout'>{formatPrice(price + shippingCost)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductsCheckout;