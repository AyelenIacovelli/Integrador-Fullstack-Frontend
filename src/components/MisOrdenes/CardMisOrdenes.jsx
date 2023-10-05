import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice"
import OrderStatus from "../UI/OrderStatus/OrderStatus";

import "./cardMisOrdenes.css"
import { formatPriceSale } from "../../utils";



const CardMisOrdenes = ({ createdAt, status, total, _id, pricesale }) => {

    const navigate = useNavigate()

    const formattedTotal = pricesale ? formatPriceSale(total) : formatPrice(total);

    return (
        <div className="pedido-container" onClick={() => navigate(`/resumen/${_id}`)}>
            <div className="text-container">
                <h2 className="title">ID de la orden: #{_id.slice(0, 7)}</h2>
                <p className="id">Fecha {formatDate(createdAt)}</p>
                <p className="price">{formattedTotal}</p>
            </div>
            <OrderStatus status={status} />
        </div>
    );
};

export default CardMisOrdenes;