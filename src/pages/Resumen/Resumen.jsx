import { formatPrice } from "../../utils/formatPrice";

import CardResumen from "../../components/Resumen/CardResumen";
import Link from "../../components/UI/Link/Link";

import "./resumen.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../axios/axios-orders";
import { useParams } from "react-router-dom";

const Resumen = () => {

    const dispatch = useDispatch()
    const { orderId } = useParams();

    const [visitedOrder, setVisitedOrder] = useState(null);

    const orders = useSelector(state => state.orders.orders)
    const { currentUser } = useSelector(state => state.user)

    useEffect(() => {
        if (!orders) {
            getOrders(dispatch, currentUser)
        }
        setVisitedOrder(orders?.find(order => order._id === orderId))
    }, [orderId, currentUser, orders, dispatch])

    return (

        <div className="resumen-container">
            <div className="resumen-title">
                <h1>Resumen Orden: #{visitedOrder?._id.slice(0, 7)}</h1>
                <Link borderRadius="20" to="/mis-ordenes"><span className="mis-ordenes">Mis ordenes</span></Link>
            </div>
            <h2>Productos:</h2>
            <div className="products-container">
                {
                    visitedOrder?.items.map((item) => {
                        return <CardResumen {...item} key={item._id} />
                    })
                }
            </div>

            <div className="resumen-container-info">
                <h3>Costos:</h3>
                <div className="costo-producto">
                    <p>Costo de productos</p>
                    <span>{formatPrice(visitedOrder?.price)}</span>
                </div>
                <div className="costo-producto envio">
                    <p>Costo de envío</p>
                    <span>{formatPrice(visitedOrder?.shippingCost)}</span>
                </div>
                <div className="costo-producto total">
                    <p>Total</p>
                    <span>{formatPrice(visitedOrder?.total)}</span>
                </div>
            </div>
        </div>




    );
};

export default Resumen;