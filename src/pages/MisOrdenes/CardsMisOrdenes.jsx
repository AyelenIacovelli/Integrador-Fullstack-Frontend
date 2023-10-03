import React from 'react'

const CardsMisOrdenes = () => {
    const { orders, loading, error } = useSelector(state => state.orders)
    if (loading && !orders) {
        return <p>loading</p>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>CardsMisOrdenes</div>
    )
}

export default CardsMisOrdenes