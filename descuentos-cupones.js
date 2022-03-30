const couponCodes = [
    "SUPERMAN",
    "BATMAN",
    "SPIDERMAN",
    "FLASH"  
];

const couponPercentages = [
    20,
    15,
    10,
    5  
];

const availableCoupons = [
    2,
    3,
    4,
    5  
];


function precioFinal (precio, porcentajeDescuento)
 {
    const porcentajePagadero = 100 - porcentajeDescuento;
    const precioFinal = (precio * porcentajePagadero) / 100;
    return precioFinal;
}


function onClickDiscountCalc()
{
    let input = document.getElementById("inputPrice"); 
    const priceValue = input.value;
    input = document.getElementById("inputCoupon"); 
    const couponValue = input.value;   
    let discountPercentage = 0;

    if (!couponCodes.includes(couponValue))
    {        
        if (couponValue != "")
        {
            alert ("Cupon NO valido");
        }        
    } 
    else 
    {        
        const i = couponCodes.indexOf(couponValue);
        if (availableCoupons[i] === 0)
        {
            alert ("Cupón agotado!");
        } else
        {
            discountPercentage = couponPercentages[i];
            availableCoupons[i]--; 
            alert ("Porcentaje de descuento "+ discountPercentage + "%");                 
        }        
    }
    const resultPrice = precioFinal(priceValue, discountPercentage);
    const resultText = document.getElementById("inputResult");
    resultText.value = resultPrice;  
    const couponText = document.getElementById("inputCoupon");
    couponText.value = "";
    
}



   


