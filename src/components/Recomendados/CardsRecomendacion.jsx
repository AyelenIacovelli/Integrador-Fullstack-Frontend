import React from 'react';
import CardRecomendacion from './CardRecomendacion';
import { useSelector } from 'react-redux';

const CardsRecomendacion = () => {

    const recommended = useSelector(state => state.recommended.recommended)

    return (
        <div className='cards-container' >
            {
                recommended.map((recomendado) => {
                    return <CardRecomendacion {...recomendado} key={recomendado.id} />
                })
            }
        </div>
    );
};

export default CardsRecomendacion;