const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];


function onClickButtonPriceDiscount() {

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento = 0;
  
    switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    }      
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;


    function calcularPrecioConDescuento (precio, porcentajeDescuento) {
        const porcentajePagadero = 100 - porcentajeDescuento;
        const precioFinal = (precio * porcentajePagadero) / 100;
        return precioFinal;
    }

  }





