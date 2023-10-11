import React from 'react';
import { useNavigate } from "react-router-dom"

import Input from '../../../components/UI/Input/Input';
import Submit from '../../../components/UI/Submit/Submit';

import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { createOrder } from '../../../axios/axios-orders';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../redux/slices/cartSlice';

import Loader from "../../../components/UI/Loader/Loader"

const CheckoutForm = ({ cartItems, price, shippingCost }) => {

    const validationSchema = Yup.object().shape({
        name: Yup.string().matches(/^[A-Za-z ]*$/, 'No se permiten números').required('Campo requerido'),
        cellphone: Yup.number().required('Campo requerido'),
        address: Yup.string().required('Campo requerido'),
        province: Yup.string().required('Campo requerido'),
        postalCode: Yup.number().required('Campo requerido'),
        location: Yup.string().required('Campo requerido'),
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.user)

    return (
        <div className='checkout-datos'>
            <h2>Ingresá tus datos</h2>
            <Formik
                initialValues={{
                    name: '',
                    cellphone: '',
                    address: '',
                    province: '',
                    postalCode: '',
                    location: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    const orderData = {
                        items: cartItems,
                        price,
                        shippingCost,
                        total: price + shippingCost,
                        shippingDetails: {
                            ...values
                        }
                    };

                    try {
                        await createOrder(orderData, dispatch, currentUser);
                        navigate("/felicitaciones");
                        dispatch(clearCart());
                    } catch (error) {
                        console.log(error);
                        alert("error al crear la orden")
                    }

                }}
            >

                {
                    ({ isSubmitting }) => (
                        <Form className='form-check'>
                            <Input
                                htmlFor='nombre'
                                type='text'
                                id='nombre'
                                placeholder='Tu nombre'
                                name="name"
                            >
                                Nombre
                            </Input>
                            <Input
                                htmlFor='celular'
                                type='text'
                                id='celular'
                                placeholder='Tu celular'
                                name="cellphone"
                            >
                                Celular
                            </Input>
                            <Input
                                htmlFor='localidad'
                                type='text'
                                id='localidad'
                                placeholder='Tu localidad'
                                name="location"
                            >
                                Localidad
                            </Input>
                            <Input
                                htmlFor='direccion'
                                type='text'
                                id='dirección'
                                placeholder='Tu dirección'
                                name="address"
                            >
                                Dirección
                            </Input>
                            <Input
                                htmlFor='cp'
                                type='text'
                                id='cp'
                                placeholder='Tu Código Postal'
                                name="postalCode"
                            >
                                Código Postal
                            </Input>
                            <Input
                                htmlFor='province'
                                type='text'
                                id='province'
                                placeholder='Tu Provincia'
                                name="province"
                            >
                                Provincia
                            </Input>
                            <div>
                                <Submit disabled={!cartItems.length || isSubmitting}>
                                    {
                                        isSubmitting ? <Loader /> : "Iniciar Pedido"
                                    }
                                </Submit>
                            </div>
                        </Form>
                    )
                }



            </Formik>
        </div>
    );
};

export default CheckoutForm;