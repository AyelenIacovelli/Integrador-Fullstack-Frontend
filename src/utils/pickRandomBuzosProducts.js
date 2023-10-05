export const pickRandomBuzosProducts = (cantidad, products) => {
    const buzosProducts = products.filter((product) => product.category === 'Buzos');
    const nuevoArray = [];

    while (nuevoArray.length < cantidad && buzosProducts.length > 0) {
        const indexRandom = Math.floor(Math.random() * buzosProducts.length);
        nuevoArray.push(buzosProducts[indexRandom]);
        buzosProducts.splice(indexRandom, 1);
    }

    return nuevoArray;
};