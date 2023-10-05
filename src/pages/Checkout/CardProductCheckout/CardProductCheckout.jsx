// import { formatPrice } from '../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../../../components/UI/Count/Count';
import Increase from '../../../components/UI/Increase/Increase';


import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cartSlice';

const CardProductCheckout = ({ img, title, desc, price, id, quantity, pricesale }) => {

    const dispatch = useDispatch();

    const isPriceSale = pricesale !== undefined; // Comprueba si 'pricesale' está definido

    return (
        <div className='card-container'>
            <img
                src={img}
                alt={title}
            />
            <div className='card-info'>
                <h3 className='product-title'>{title}</h3>
                <h3 className='text-title'>{desc}</h3>
                <span className="price">
                    <span className={`price-original ${isPriceSale ? 'strikethrough' : ''}`}>${price}</span>
                    {isPriceSale && <span className="price-sale">${pricesale}</span>}
                </span>
            </div>
            <span className='quantity-container'>
                <Increase
                    onClick={() => dispatch(removeFromCart(id))}
                >
                    {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
                </Increase>
                <Count>{quantity}</Count>
                <Increase onClick={() => dispatch(addToCart({ img, title, desc, price, id, quantity, pricesale }))}>
                    <BsPlusLg />
                </Increase>
            </span>
        </div>
    );
};

export default CardProductCheckout;