const coupons = [
   {
       name: "juan",
       discount: 15,
   },
   {
       name: "batman",
       discount: 30,
   },
   {
       name: "secreto",
       discount: 25,
   },
];


function onClickButtonPriceDiscount() {

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
  
    let descuento;


    const isCouponValueValid = function (coupon) {
      return coupon.name === couponValue;
   };
   /*
   isCouponValueValid contiene el texto de la función que de le asigna
   con el propósito de pasar esa función como argumento del método find()
   que es un método para buscar en arrays   
   */
 

  
   const userCoupon = coupons.find(isCouponValueValid);
   // userCoupon guarda un objeto
   

   if (!userCoupon) {
      alert("El cupón " + couponValue + " no es válido");

   } else {
      alert(userCoupon.name + " " + userCoupon.discount);// informativo

      const descuento = userCoupon.discount;
      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
      const resultP = document.getElementById("resultP");
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
   } 
   
   function calcularPrecioConDescuento (precio, porcentajeDescuento) {
        const porcentajePagadero = 100 - porcentajeDescuento;
        const precioFinal = (precio * porcentajePagadero) / 100;
        return precioFinal;
   }

}





