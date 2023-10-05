import React from 'react';


import { useSelector } from 'react-redux';
import CardRecomendacion from '../Recomendados/CardRecomendacion';

const CardsOfertas = () => {

    const ofertas = useSelector(state => state.ofertas.ofertas)

    return (
        <div className='cards-container' >
            {
                ofertas.map((oferta) => {
                    return <CardRecomendacion {...oferta} key={oferta.id} />
                })
            }
        </div>
    );
};

export default CardsOfertas;