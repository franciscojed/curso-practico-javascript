const notasDeFran = [
    {
        course: "Programación",
        note: 9.9,
        credit: 5,
    },
    {
        course: "Matemáticas",
        note: 8.8,
        credit: 4,
    },
    {
        course: "Inglés",
        note: 9.5,
        credit: 4,
    },
    {
        course: "Oratoria",
        note: 10,
        credit: 3,
    },
];



const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


const notas = [
    {
        course: "Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Química",
        note: 9,
        credit: 4,
    },
    {
        course: "Matemáticas",
        note: 7,
        credit: 5,
    },
    {
        course: "Biología",
        note: 10,
        credit: 5,
    },
    {
        course: "Dibujo Técnico",
        note: 8,
        credit: 5,
    },
    {
        course: "Algebra",
        note: 6,
        credit: 5,
    },
    {
        course: "Calculo",
        note: 7,
        credit: 2,
    },
    {
        course: "Trigonometria",
        note: 8,
        credit: 5,
    },
    {
        course: "Enfoque a la Programación",
        note: 7,
        credit: 5,
    },
    {
        course: "Geometría",
        note: 10,
        credit: 4,
    },
    {
        course: "Historia",
        note: 8,
        credit: 4,
    },
    {
        course: "Ética Profesional",
        note: 9,
        credit: 5,
    },
    {
        course: "Bases de Datos",
        note: 10,
        credit: 4,
    },
    {
        course: "Democracia",
        note: 1,
        credit: 5,
    },
    {
        course: "Finanzas",
        note: 3,
        credit: 5,
    },
    {
        course: "Contabilidad",
        note: 10,
        credit: 3,
    },
    {
        course: "Redes",
        note: 9,
        credit: 4,
    },
    {
        course: "Sistemas Operativos",
        note: 10,
        credit: 5,
    },
];




function mediaPonderada(objeto)
{
    const notesWithCredit = objeto.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    
    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    
    const credits = objeto.map(function (noteObject) {
        return noteObject.credit;
    });
    
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    
    
    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
    return promedioPonderadoNotasConCreditos;

}




