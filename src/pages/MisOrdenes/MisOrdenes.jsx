import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import "./misOrdenes.css"

import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/slices/ordersSlice';

const MisOrdenes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.user.currentUser)
    const { orders, error } = useSelector(state => state.orders);

    useEffect(() => {
        if (!orders) {
            getOrders(dispatch, currentUser)
        }

        if (!currentUser?.token) {
            dispatch(fetchOrdersFail())
        } else {
            error && dispatch(clearError())
        }
    }, [currentUser, orders, error, dispatch])

    return (
        <>
            <div className='misordenes-container'>
                <h2>Mis órdenes</h2>
                <CardsMisOrdenes />
                <div className='misordenes-btncontainer'>
                    <Button onClick={() => navigate('/')}>Volver a comprar</Button>
                </div>
            </div>
            <img
                src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
                alt=''
            />
        </>
    );
};

export default MisOrdenes;