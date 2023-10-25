import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';
import "./misOrdenes.css"
import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/slices/ordersSlice';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/common/CommonSection';

const MisOrdenes = () => {
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
        <Helmet title="Ordenes">
            <CommonSection title="Mis Ordenes" />
            <div className='misordenes-container'>
                <CardsMisOrdenes />
            </div>
        </Helmet>
    );
};

export default MisOrdenes;