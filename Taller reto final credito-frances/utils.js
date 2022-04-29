function limpiarFilas()
{       
    let i = cantidadPeriodos;
    while (i > 0)   
    {
        document.getElementsByTagName("tr")[i].remove();                   
        --i;
    }
}

function mesTextual(mesDePago)
{
    let mesDePagoTextual;

    switch (mesDePago)
    {
        case 1:
            mesDePagoTextual = "Enero";
        break;
        case 2:
            mesDePagoTextual = "Febrero";
        break;
        case 3:
            mesDePagoTextual = "Marzo";
        break;
        case 4:
            mesDePagoTextual = "Abril";
        break;
        case 5:
            mesDePagoTextual = "Mayo";
        break;
        case 6:
            mesDePagoTextual = "Junio";
        break;
        case 7:
            mesDePagoTextual = "Julio";
        break;
        case 8:
            mesDePagoTextual = "Agosto";
        break;
        case 9:
            mesDePagoTextual = "Septiembre";
        break;
        case 10:
            mesDePagoTextual = "Octubre";
        break;
        case 11:
            mesDePagoTextual = "Noviembre";
        break;
        case 12:
            mesDePagoTextual = "Diciembre";
        break;
        default:
            console.log("Error en el número del mes de pago.");
        break;
    }
    return mesDePagoTextual;
}

