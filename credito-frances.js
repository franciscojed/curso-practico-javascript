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

    /*        
    CÓDIGO DE COMO CREAR UN NUEVO TAG E INSERTARLO DEBAJO DE OTRO NUEVO
    for (let i = 1; i <= cantidadPeriodos; i++)
        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = i;  
        document.body.appendChild(nuevoParrafo);  
    }
     
    OTRO CÓDIGO. EM EL QUE ME BASÉ
    for(i=1;i<=num_stud;i++)
    {
        newDiv = document.createElement('div');
        divIdName = '50'+i;
        newdiv.setAttribute('id',divIdName);
        newdiv.innerHTML ='<div id="box'+i+'">Testing 123</div>';
        document.body.appendChild(newdiv);
    }
    */

function amortizacion()
{
    const objetoAmortizacion = calcularCuota();  

    const valorPrestamo = objetoAmortizacion.prestamo;
    const interesPeriodo = objetoAmortizacion.interesPeriodo;
    const cantidadPeriodos = objetoAmortizacion.cantPeriodos;
    const cuotaFija = objetoAmortizacion.cuotaFija;
    
    let montoInteres = valorPrestamo * interesPeriodo;
    let abonoACapital = cuotaFija - montoInteres;
    let capitalPagado = abonoACapital;
    let capitalPendiente = valorPrestamo - capitalPagado;
    let interesAcumulado = montoInteres;

    let USDollar = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });    
    
    const tabla = document.getElementById("tabla");
    let fila;
    let celda; 
    

    for (let i = 1; i <= cantidadPeriodos; i++)
    {
        fila = tabla.insertRow(i);
        
        celda = fila.insertCell(0);
        celda.innerHTML = i;

        celda = fila.insertCell(1);
        celda.innerHTML = USDollar.format(cuotaFija);

        celda = fila.insertCell(2);
        celda.innerHTML = USDollar.format(abonoACapital);

        celda = fila.insertCell(3);
        celda.innerHTML = USDollar.format(montoInteres);

        celda = fila.insertCell(4);
        celda.innerHTML = USDollar.format(capitalPagado);

        celda = fila.insertCell(5);
        celda.innerHTML = USDollar.format(capitalPendiente);

        celda = fila.insertCell(6);
        celda.innerHTML = USDollar.format(interesAcumulado);

        montoInteres = capitalPendiente * interesPeriodo;
        abonoACapital = cuotaFija - montoInteres;
        capitalPagado = capitalPagado + abonoACapital;
        capitalPendiente = valorPrestamo - capitalPagado;
        interesAcumulado = interesAcumulado + montoInteres;
    }
}