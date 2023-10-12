import { useSelector } from 'react-redux';
import CardMisOrdenes from './CardMisOrdenes';
import Loader from "../UI/Loader/Loader"
import { Link } from 'react-router-dom';
import "./cardMisOrdenes.css"

const CardsMisOrdenes = () => {

    const { orders, loading, error } = useSelector(state => state.orders)


    if (loading && !orders) {
        return <Loader styles={{ height: '50px', width: '50px' }} />
    }

    if (error) {
        return <h2 style={{ textAlign: 'center' }}>{error}</h2>;
    }

    return (
        <div className='misordenes-container'>
            {
                orders?.length ? (
                    orders.map((order) => {
                        return <CardMisOrdenes key={order._id} {...order} />
                    })
                ) : (
                    <h2>¡Oh no! Aún no tienes órdenes realizadas. ¿Qué esperas para navegar nuestra <Link to={"/tienda"} className='link-tienda'>Tienda</Link>?</h2>
                )
            }

        </div>
    );
};

export default CardsMisOrdenes;