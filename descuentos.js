/*const precioOriginal = 120;
const porcentajeDescuento = 15;

const porcentajePagadero = 100 - porcentajeDescuento;

const precioFinal = (precio * porcentajePagadero) / 100;

console.log({
    precioOriginal, 
    porcentajeDescuento,
    porcentajePagadero,
    precioFinal
});
*/

function precioFinal (precio, descuento) {
    const porcentajePagadero = 100 - descuento;
    const precioFinal = (precio * porcentajePagadero) / 100;
    return precioFinal;
}
