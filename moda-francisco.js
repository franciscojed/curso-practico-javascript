const listaEjemplo =
[
    "peras",
    "manzanas",
    "uvas",
    "bananos",
    "papayas",
    "uvas",
    "naranjas",
    "bananos",
    "manzanas",
    "naranjas",
    "melones",
    "bananos",
    "sandias",
    "uvas",
    "ciruelas",
    "ciruelas",
    "mangos",
    "mangos",
    "mangos",
    "guanabanas",
    "piñas",
    "sandias",
    "melones",
    "bananos",
    "bananos",
    "fresas",
    "fresas",
    "bananos",
    "bananos",
    "bananos",
];


function calcularModa(lista)
{
    // eliminando los elementos repetidos
    let listaValoresUnicos = [...new Set(lista)];

    // contando cuantas veces aparece cada valor
    let listaConteo = [];

    for (let i = 0; i < listaValoresUnicos.length; i++)
    {
        for (let j = 0; j < lista.length; j++)
        {
            if (listaValoresUnicos[i] === lista[j])
            {
                if (listaConteo[i]) //si esta posición no está vacia
                {
                    listaConteo[i]++;
                }
                else // si la posición está vacia
                {
                    listaConteo[i] = 1;
                }
            } 
        }
    }

    //hallando el valor más grande
    const valorModa = Math.max(...listaConteo);

    //hallando el indice del valor más alto
    const indiceModa = listaConteo.indexOf(valorModa);

    return `La moda es ${listaValoresUnicos[indiceModa]} y su valor es ${valorModa}`;    
}











