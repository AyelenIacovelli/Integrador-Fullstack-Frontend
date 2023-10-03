import { getOrders } from "../../axios/axios-orders";
import { clearError, fetchOrdersFail } from '../../redux/slices/ordersSlice'
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

const MisOrdenes = () => {
    // const navigate = useNavigate();
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
        <>holis</>
    )
}

export default MisOrdenes;