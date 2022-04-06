lista1 =
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

const lista1Count = {};

lista1.map
(
    function(elemento)
    {
        if (lista1Count[elemento])
        {
            lista1Count[elemento] += 1;
        }
        else
        {   
            lista1Count[elemento] = 1;

        }
    }
);

const lista1Array = Object.entries(lista1Count).sort((a,b)=>b[1]-a[1]);

const moda = lista1Array[0];








