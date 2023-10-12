import { formatPrice } from "../../utils";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/common/CommonSection";
import "./cardResumen.css"


const CardResumen = ({ title, desc, quantity, img, price, pricesale }) => {

    const totalPrice = pricesale ? pricesale * quantity : price * quantity;

    return (
        <Helmet title="Resumen">
            <CommonSection title="Mi Resúmen" />
            <div className="product">
                <div className="product-left">
                    <img
                        src={img}
                        alt={title}
                    />
                    <div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="price-container">
                    <p>{quantity}U</p>
                    <span className="product-price">{formatPrice(totalPrice)}</span>
                </div>
            </div>
        </Helmet>
    );
};

export default CardResumen;