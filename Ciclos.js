// MIRCHAAAA

for (var i = 0; i < 10; i++) {
    console.log(i)
}


// DINAMICO DEPENDIENDO DEL NUMERO DE ELEMENTOS ASI MISMO LOS RECORRE

let nume =[1,2,3,4,5,6]

for (var i = 0; i < nume.length; i++) {
    console.log(nume[i])
}

// (FORIN) RECORRER O ITERAR LAS PROPIEDADES DE UN OBJETO


const yeffer ={
    nombre:"Yefire",
    apellido:"Brown",
    edad:29,
    pasatiempo: ["Beber", "Gym","Comer"],
    casado:false,
    contacto:{
        email:"y.yefire@gmail.com",
        twitter:"@fire",
        Pinyter: "@LoveFire"
    },
    
    saludar:function (){
        console.log(`mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
    
    
}

for (const key in yeffer) {
    console.log(`${key}, ${yeffer[key]}`)
    
}

// (FOROF) RECORRER O ITERAR LAS PROPIEDADES DE UN ARREGLO

for (const iterator of nume) {
    console.log(iterator)
    
}



/**
 * Foreach en JavaScript
//  * 
//  * @author parzibyte
//  */
//  const canciones = [
//     "Hang onto yourself",
//     "Go your own way",
//     "Modern Love",
// ];
// // Primer ejemplo, definiendo una función y luego pasándola a forEach
// const funcionQueRecorre = function(cancion) {
//     console.log("Tenemos una canción: ", cancion);
// }
// canciones.forEach(funcionQueRecorre);



//-------------------------------------------------------------------------------------------------------------------





// Segundo ejemplo recibiendo el índice, igualmente con una función con nombre
const funcionQueRecorreConIndice = function(cancion, indice) {

    console.log("Tenemos la canción %s en el índice %d", cancion, indice);
}
canciones.forEach(funcionQueRecorreConIndice);

// Tercer ejemplo recibiendo el arreglo
const funcionQueRecorreConIndiceYArreglo = function(cancion, indice, arreglo) {
    console.log("Tenemos la canción %s en el índice %d. El arreglo completo es %s", cancion, indice, arreglo);
}
canciones.forEach(funcionQueRecorreConIndiceYArreglo);


// Cuarto ejemplo con función flecha
const funcionFlechaQueRecorreConIndiceYArreglo = (cancion, indice, arreglo) => {
    console.log("Tenemos la canción %s en el índice %d. El arreglo completo es %s", cancion, indice, arreglo);
}
canciones.forEach(funcionFlechaQueRecorreConIndiceYArreglo);


// Quinto ejemplo, función anónima
canciones.forEach(function(cancion) {
    console.log("Canción dentro de función anónima: ", cancion);
});

// Sexto ejemplo, función flecha anónima
canciones.forEach(cancion => {
    console.log("Canción dentro de función flecha anónima: ", cancion);
});

// Séptimo ejemplo, función flecha anónima de una línea
canciones.forEach(cancion => console.log("Canción dentro de función flecha simplificada y anónima: ", cancion));

// Octavo ejemplo, invocando a función
canciones.forEach(console.log);

// Noveno ejemplo, se puede recorrer cualquier arreglo
const personas = [{
        nombre: "Luis",
        edad: 23,
    },
    {
        nombre: "John Galt",
        edad: 50
    }
];
personas.forEach(persona => {
    console.log("Nombre: %s, edad: %d", persona.nombre, persona.edad);
});