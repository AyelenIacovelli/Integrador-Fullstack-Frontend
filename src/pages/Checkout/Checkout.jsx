import React from 'react';

import CheckoutForm from '../Checkout/Form/CheckoutForm';
import ProductsCheckout from '../Checkout/Products/ProductsCheckout';
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/common/CommonSection"

import "./checkout.css"

import { useSelector } from "react-redux";

const Checkout = () => {

    const { cartItems, shippingCost } = useSelector(state => state.cart)

    const totalPrice = cartItems.reduce((acc, item) => {
        const itemPrice = item.pricesale || item.price;
        return (acc += itemPrice * item.quantity);
    }, 0);

    return (
        <Helmet title="Checkout">
            <CommonSection title="Completar compra" />
            <section className='container__section'>
                <ProductsCheckout
                    cartItems={cartItems}
                    shippingCost={shippingCost}
                    price={totalPrice}
                />
                <CheckoutForm
                    cartItems={cartItems}
                    shippingCost={shippingCost}
                    price={totalPrice}
                />
            </section>
        </Helmet>
    );
};

export default Checkout;