import { createSlice } from '@reduxjs/toolkit';
import { products } from "../../data/Products"
import { pickRandomBuzosProducts } from '../../utils/pickRandomBuzosProducts';

const INITIAL_STATE = {
    ofertas: pickRandomBuzosProducts(6, products),
};

export const ofertasSlice = createSlice({
    name: 'ofertas',
    initialState: INITIAL_STATE,
    reducers: {
        randomOfertas: (state) => {
            return state;
        },
    },
});

export const { randomOfertas } = ofertasSlice.actions;

export default ofertasSlice.reducer;