import React from 'react';

import CheckoutForm from '../Checkout/Form/CheckoutForm';
import ProductsCheckout from '../Checkout/Products/ProductsCheckout';
import Helmet from "../../components/Helmet/Helmet"
import CommonSection from "../../components/UI/common/CommonSection"

import { useSelector } from "react-redux";

const Checkout = () => {

    const { cartItems, shippingCost } = useSelector(state => state.cart)

    const price = cartItems.reduce((acc, item) => {
        return (acc += item.price * item.quantity)
    }, 0)

    return (
        <Helmet title="Checkout">
            <CommonSection title="Completar compra" />
            <div className='container-checkout'>
                <CheckoutForm
                    cartItems={cartItems}
                    shippingCost={shippingCost}
                    price={price}
                />
                <ProductsCheckout
                    cartItems={cartItems}
                    shippingCost={shippingCost}
                    price={price}
                />
            </div>
        </Helmet>
    );
};

export default Checkout;