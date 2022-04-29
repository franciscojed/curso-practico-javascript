let cantidadPeriodos = 0;

function calcularCuota() {
    
    let entrada = document.getElementById("valor-prestamo");
    const valorPrestamo = entrada.value;

    entrada = document.getElementById("tasa-anual");
    const tasaAnual = entrada.value / 100;    

    entrada = document.getElementById("cantidad-agnos");
    const agnos = entrada.value;   
    
    entrada = document.getElementById("cantidad-meses");
    const meses = entrada.value;

    entrada = document.getElementById("agno");
    const agnoInicio = entrada.value;

    entrada = document.getElementById("mes");
    const mesDeInicio = entrada.value;

    const tasaMensual = tasaAnual / meses;

    entrada = document.getElementById("tasa-mensual");
    entrada.value = (tasaMensual*100).toFixed(4);

    // Formula cuota fija amortización crédito Francés
    let operacion = 1 - ( Math.pow( (1 + tasaMensual), (-agnos*meses)) );
    operacion = tasaMensual / operacion;
    const cuota = valorPrestamo * operacion;    
       
    const resultado = document.getElementById("cuota-fija");
    resultado.innerHTML = `<p>Cuota fija a pagar ${cuota.toFixed(2)}</p>`; 
    
    cantidadPeriodos = agnos * meses;

    const objetoAmortizacion =
    {   
        prestamo: valorPrestamo,
        interesPeriodo: tasaMensual,        
        cuotaFija: cuota ,
        agno: agnoInicio,  
        mes: mesDeInicio   
    };
    
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

function onClickAmortizacion()
{
    if (cantidadPeriodos > 0)
    {
        limpiarFilas();
    }

    const objetoAmortizacion = calcularCuota();  

    const valorPrestamo = objetoAmortizacion.prestamo;
    const interesPeriodo = objetoAmortizacion.interesPeriodo;
    const cuotaFija = objetoAmortizacion.cuotaFija;
    let agnoPago = objetoAmortizacion.agno;
    let mesDePago = objetoAmortizacion.mes;

    mesDePago = parseInt(mesDePago);


    //La lógica para iniciar el informe
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

    let mesDePagoTextual;    

    for (let i = 1; i <= cantidadPeriodos; ++i)
    {
        mesDePagoTextual = mesTextual(mesDePago);

        fila = tabla.insertRow(i);
        
        celda = fila.insertCell(0);
        celda.innerHTML = i; 

        celda = fila.insertCell(1);
        celda.innerHTML = mesDePagoTextual;

        celda = fila.insertCell(2);
        celda.innerHTML = agnoPago;

        celda = fila.insertCell(3);
        celda.innerHTML = USDollar.format(cuotaFija);

        celda = fila.insertCell(4);
        celda.innerHTML = USDollar.format(abonoACapital);

        celda = fila.insertCell(5);
        celda.innerHTML = USDollar.format(montoInteres);

        celda = fila.insertCell(6);
        celda.innerHTML = USDollar.format(capitalPagado);

        celda = fila.insertCell(7);
        celda.innerHTML = USDollar.format(capitalPendiente);

        celda = fila.insertCell(8);
        celda.innerHTML = USDollar.format(interesAcumulado);

        //La lógica para generar todo el informe
        montoInteres = capitalPendiente * interesPeriodo;
        abonoACapital = cuotaFija - montoInteres;
        capitalPagado = capitalPagado + abonoACapital;
        capitalPendiente = valorPrestamo - capitalPagado;
        interesAcumulado = interesAcumulado + montoInteres;        

        if (mesDePago === 12)
        {
            ++agnoPago;
            mesDePago = 0;
        }
        ++mesDePago;         
    }    
}


