import { formatPrice } from "../../utils";

import "./cardResumen.css"


const CardResumen = ({ img, title, desc, quantity, price, pricesale }) => {

    const totalPrice = pricesale ? pricesale * quantity : price * quantity;
    console.log(img);

    return (

        <div className="product">
            <div className="product-left">

                <h3>{title}</h3>
                <p>{desc}</p>

            </div>
            <div className="price-container">
                <p>{quantity}U</p>
                <span className="product-price">{formatPrice(totalPrice)}</span>
            </div>
        </div>

    );
};

export default CardResumen;