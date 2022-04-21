function pagoProgramado() {
    
    let entrada = document.getElementById("importe");
    const importe = entrada.value;

    entrada = document.getElementById("tasa-anual");
    const tasaAnual = entrada.value / 100;    

    entrada = document.getElementById("cantidad-agnos");
    const agnos = entrada.value;   
    
    entrada = document.getElementById("cantidad-meses");
    const meses = entrada.value;

    const tasaMensual = tasaAnual / meses;

    entrada = document.getElementById("tasa-mensual");
    entrada.value = (tasaMensual*100).toFixed(4);

    // Formula amortización crédito Francés
    let operacion = 1 - ( Math.pow( (1 + tasaMensual), (-agnos*meses)) );
    operacion = tasaMensual / operacion;
    const cuota = importe * operacion;    
       
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<strong>${cuota}</strong>`;     
}