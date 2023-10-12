import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

// import Button from '../../components/UI/Button/Button';
import CardsMisOrdenes from '../../components/MisOrdenes/CardsMisOrdenes';

import "./misOrdenes.css"

import { getOrders } from '../../axios/axios-orders';
import { clearError, fetchOrdersFail } from '../../redux/slices/ordersSlice';
import Helmet from '../../components/Helmet/Helmet';
import CommonSection from '../../components/UI/common/CommonSection';

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
        <Helmet title="Ordenes">
            <CommonSection title="Mis Ordenes" />
            <div className='misordenes-container'>

                <CardsMisOrdenes />
                {/* <div className='misordenes-btncontainer'>
                    <Button onClick={() => navigate('/')}>Volver a la tienda</Button>
                </div> */}
            </div>
            {/* <img
                src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
                alt=''
            /> */}
        </Helmet>
    );
};

export default MisOrdenes;