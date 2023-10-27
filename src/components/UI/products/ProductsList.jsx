import React from 'react'
import Button from '../Button/Button';
import "./productCard.css"
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { INITIAL_LIMIT } from '../../../utils/constants';
import ProductCard from './ProductCard';

const ProductsList = ({ searchTerm }) => {
    const [limit, setLimit] = useState(INITIAL_LIMIT)

    let products = useSelector((state) => state.products.products)

    const { selectedCategory } = useSelector((state) => state.categories)

    const totalProducts = useSelector((state) => state.products.totalProducts)

    if (selectedCategory) {
        products = { [selectedCategory]: products[selectedCategory] }
    }

    useEffect(() => {
        setLimit(INITIAL_LIMIT)
    }, [selectedCategory])

    const filteredProducts = Object.entries(products)
        .map(([, items]) =>
            items
                .filter((item) =>
                    searchTerm
                        ? item.desc.toLowerCase().includes(searchTerm.toLowerCase())
                        : true
                )
                .map((item) => {
                    if (limit >= item.id || selectedCategory || searchTerm) {
                        return <ProductCard {...item} key={item.id} />;
                    }
                    return null;
                })
        );

    if (filteredProducts.every((products) => products.length === 0)) {
        return <div>No hay productos con ese nombre.</div>;
    }

    return (
        <>
            <div className="productos-container">{filteredProducts}</div>

            {
                (!selectedCategory && !searchTerm) && (
                    <div className="button-container">
                        <Button
                            onClick={() => setLimit((prevLimit) => prevLimit - INITIAL_LIMIT)}
                            disabled={INITIAL_LIMIT === limit}
                        >
                            <span>Ver menos</span>
                        </Button>
                        <Button
                            onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
                            disabled={totalProducts <= limit}
                        >
                            Ver más
                        </Button>
                    </div>
                )
            }
        </>
    );
};

export default ProductsList;