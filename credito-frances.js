function calcularCuota() {
    
    let entrada = document.getElementById("valorPrestamo");
    const valorPrestamo = entrada.value;

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
    const cuota = valorPrestamo * operacion;    
       
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Cuota fija a pagar ${cuota.toFixed(2)}</p>`; 
    
    const cantidadPeriodos = agnos * meses;

    const objetoAmortizacion =
    {   
        prestamo: valorPrestamo,
        interesPeriodo: tasaMensual,
        cantPeriodos: cantidadPeriodos,
        cuotaFija: cuota      
    }
    
    return objetoAmortizacion;
}


function amortizacion()
{
    const objetoAmortizacion = calcularCuota();    
    const valorPrestamo = objetoAmortizacion.prestamo;
    const interesPeriodo = objetoAmortizacion.interesPeriodo;
    const cantidadPeriodos = objetoAmortizacion.cantPeriodos;
    const cuotaFija = objetoAmortizacion.cuotaFija;

    

    for(let i = 1; i <= cantidadPeriodos; i++)
    {        
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = i;  
        document.body.appendChild(nuevoParrafo);   
    }      

    /*for(i=1;i<=num_stud;i++)
        {
            nuevoParrafo = document.createElement('div');
            divIdName = '50'+i;
            newdiv.setAttribute('id',divIdName);
            newdiv.innerHTML ='<div id="box'+i+'">Testing 123</div>';
            document.body.appendChild(newdiv);
        }*/


}