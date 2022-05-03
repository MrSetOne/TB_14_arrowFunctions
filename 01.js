const separador = "----------------------------------------------------------------"
const next = () => { console.log(`\n${separador}\n`) }

next()

// 1. Funciones flecha
// Convierte la siguiente función en una función flecha:

function saludar() {
    return "Hola";
}

const hello = () => "hola"

console.log(hello());

next()

//===============================================================

// Convierte la siguiente función en una función flecha en línea:

function division(a, b) {
    return a / b;
}

const divide = (a, b) => a / b;

console.log(divide(10, 5))

next()

//===============================================================

// Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
    return `Mi nombre es ${nombre}`;
}

const miNimbre2 = (nombre) => `Mi nombre es ${nombre}`

console.log(miNimbre2("Pepe"))

next()

//===============================================================

// Convierte las siguientes funciones en funciones flecha:

function test2() {
    console.log("Función test 2 ejecutada.");
}

function test1(callback) {
    callback();
}

const test22 = () => console.log("Función test 2 ejecutada.");

const test12 = (callback) => callback();

test12(test22)

next()

//===============================================================

// 2. Foreach
// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [{
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

//===============================================================

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

/* Solucion 1 */
// const mayorDe25 = gente.filter(persona => persona.edad >= 25)
// console.log(mayorDe25)

/* Solucion 2 */
let mayorDe25 = []

gente.forEach(persona => {
    if (persona.edad >= 25) {
        mayorDe25.push(persona)
    }
})

console.log(mayorDe25);

next()

//===============================================================

// Crea un array con la gente que empieza por J. 

/* Solucion 1 */
// const empiezaPorJ = gente.filter(persona => persona.nombre.substring(0, 1) == "J")
// console.log(empiezaPorJ)

/* Solucion 2 */

const empiezaPorJ = []
gente.forEach(persona => {
    if (persona.nombre.substring(0, 1) == "J") {
        empiezaPorJ.push(persona)
    }
})

console.log(empiezaPorJ);

next()

//===============================================================

// 3. Map
// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const numbers1 = [4, 5, 6, 7, 8, 9, 10];

const numbers1Resuelto = numbers1.map(numero => Math.pow(numero, numero))

console.log(numbers1Resuelto)

next()

//===============================================================

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/

const foodList1 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const ubi4Food = ["Italia", "Japón", "Valencia"]

const comoSoy = foodList1.map((comida, i) => {
    if (i >= ubi4Food.length) {
        return `Aunque no como carne, el ${comida} es sabroso`
    }
    return `Como soy de ${ubi4Food[i]}, amo comer ${comida}`
})

console.log(comoSoy)

next()

//===============================================================

// 4. Filter
// Crea un segundo array que devuelva los impares
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersImpares = numbers.filter(numero => numero % 2 != 0)

console.log(numbersImpares)

next()

//===============================================================

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/
const foodList2 = [{
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];

const besaVacas = foodList2.filter(plato => plato.isVeggie == true).map(vegano => `Que rico ${vegano.name} me voy a comer!`);

console.log(besaVacas);

next()

//===============================================================

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const fullMultiplo = numeros.reduce((a, b) => a * b)

console.log(fullMultiplo);

next()

//===============================================================

/*============================ Extras ============================*/
// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
// Resultado esperado
/*
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
 */
const staff = [{
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];

const frasesResultado = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`)

console.log(frasesResultado)

next()

//===============================================================

// Filter
// Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
const inventory = [{
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const menosDe300 = inventory.filter(item => item.price > 300).map(item => item.name)

console.log(menosDe300)

next()

//===============================================================

// Reduce
// Concatena todos los elementos del array con reduce para que devuelva una sola frase
// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

const sentenceElements = [
    'Me',
    'llamo',
    'MrSetOne',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const fraseCompleta = sentenceElements.reduce((a, b) => a + " " + b)

console.log(fraseCompleta)