const frutas =
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


function deListaAObjeto(lista)
{
    const elementosUnicosConCantidades = {};

    lista.map
    (
        function (elemento)
        {
            if (elementosUnicosConCantidades[elemento])
            {
                elementosUnicosConCantidades[elemento] += 1;
            }
            else
            {
                elementosUnicosConCantidades[elemento] = 1;
            }
        }
    );
    return elementosUnicosConCantidades;
}

function deObjetoClasificadoAArray(elementosUnicosConCantidades)
{
    const arrayElementosOrdenadosYCantidades =
        Object.entries(elementosUnicosConCantidades).sort
        (
            (a,b) => b[1]-a[1]
        ); 
    return arrayElementosOrdenadosYCantidades;
}


function moda(lista) //FUNCIÓN A INVOCAR
{ 
    const elementosUnicosConCantidades = deListaAObjeto(lista);
    const arrayElementosOrdenadosYCantidades = deObjetoClasificadoAArray(elementosUnicosConCantidades);
    const moda = arrayElementosOrdenadosYCantidades[0];
    return moda;    
} 