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

function precioFinal (precio, descuento)
 {
    const porcentajePagadero = 100 - descuento;
    const precioFinal = (precio * porcentajePagadero) / 100;
    return precioFinal;
}


function onClickDiscountCalc()
{
    let input = document.getElementById("inputPrice"); 
    const priceValue = input.value;
    input = document.getElementById("inputDiscount"); 
    const discountValue = input.value;
    const resultPrice = precioFinal(priceValue, discountValue);
    const resultPa = document.getElementById("resultPa");
    resultPa.innerText = "El precio final es $" + resultPrice;
}