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
    input = document.getElementById("inputPercentage"); 
    const percentageValue = input.value;
    const resultPrice = precioFinal(priceValue, percentageValue);
    const resultText = document.getElementById("inputResult");
    resultText.value = resultPrice;   
}

