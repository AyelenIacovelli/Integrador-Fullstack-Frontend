import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slices/cartSlice";
import favsSlice from './slices/favsSlice'
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/lib/persistStore';
import userReducer from "./slices/userSlice"
import ordersReducer from "./slices/ordersSlice"
import productsReducer from "./slices/productsSlice"
import categoriesReducer from "./slices/categoriesSlice"
import recommendedReducer from "./slices/recommendedSlice"
import ofertasReducer from "./slices/ofertasSlice"

const reducers = combineReducers({
    cart: cartSlice,
    favs: favsSlice,
    user: userReducer,
    orders: ordersReducer,
    products: productsReducer,
    categories: categoriesReducer,
    recommended: recommendedReducer,
    ofertas: ofertasReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'favs', 'user'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);