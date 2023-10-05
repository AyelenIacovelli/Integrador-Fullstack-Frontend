export const formatPriceSale = pricesale => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(pricesale);
};