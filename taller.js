// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
//  devolverá 10.

// En una Sola Linea
// const contarC =(s="")=>(!s)?console.warn("No le metiste nada Che"):console.log(`La cadena ${s} tiene ${s.length}`)

// const contarC =(s="")=>
// (!s)
// ?console.warn("No le metiste nada Che")
// :console.log(`La cadena ${s} tiene ${s.length}`)

// contarC('Vamo Carayooo')


x


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
// indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


// const cortarCadena = (s="", l=undefined)=> 
// (!s)
// ?console.warn("No le metiste nada Che")
// :(l === undefined)
// ?console.warn("No le metiste nada a cortar Che")
// :(l > 5)
// ?console.warn(`Esa mierda de ${l} esta muy largo chee`)
// :console.log(s.slice(0,l))


// cortarCadena('Yeffer Moreno Robledo ')
// cortarCadena('Yeffer Moreno Robledo ',5)
// cortarCadena('Yeffer Moreno Robledo ',15)








// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
// , pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].





// const cortarCadena = (s="", l=undefined)=> 
// (!s)
// ?console.warn("No le metiste nada Che")
// :(l === undefined)
// ?console.warn("No le metiste nada a cortar Che")
// :console.log(s.split(l))

// cortarCadena('vamo boca carajo que hoy gabnamos ', 'a')








// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
// devolverá Hola Mundo Hola Mundo Hola Mundo.


// const xveces =(c,v)=>{

//     for(let i =0; i<v; i++){
//         console.log(c)

//     }

// }


// xveces('Vamo Carajo',10)






// // 5) Programa una función que invierta las palabras de una cadena de texto, pe.
//  miFuncion("Hola Mundo") devolverá "odnuM aloH".

// const xreverce =(c)=>{
//     let a =c.split("")
//     // console.log(a)
//     a.reverse()
//     // console.log(a)
//     let b = a.join("")
//     console.log(b)
// }

// xreverce('Te Amo Flaca')





// // 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
//  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.


// const npalabras =(frase,w)=>{
//     let con = 0;
//     let arr = frase.split(" ")
//     for(i=0; i <= arr.length; i++){
        
//         if(w == arr[i]){
//              con++;
//         }


//     }

//     console.warn(`la Frase ${frase} tiene ${con} veces la palabra ${w}`)

// }

// npalabras('Yeffer es un crack de medio tiempo en su casa en donde sea en mi vida','en')







// // 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro),
//  pe. mifuncion("Salas") devolverá true.


// const xreverce =(c)=>{
//     let a =c.split("")
//     // console.log(a)
//     a.reverse()
//     // console.log(a)
//     let b = a.join("")
//     // console.log(b)

//     if(c===b){
//         console.log(`la palabra ${c} es palindroma ya que alreves es $${b}`)
        
//     }else{
//         console.log(`la palabra ${c} no es palindroma ya que alreves es ${b}`)
        

//     }
// }

// xreverce('reconocer')













// // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
//  pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

// const patron=(text,keys)=>{
//     let a = text.split(keys)
//     a.join()

//     console.log(a)
    
// }

// patron('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz')



// // 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

// const aleatorio=(min,max)=> Math.floor(Math.random()*(max -min)) + min;
// console.log(aleatorio(500,600))




// // 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
// pe. miFuncion(2002) devolverá true.

// const capi =(n=0)=>{
//     if(!n)return console.log('No ingresaste un numero');
//     if(typeof n!=="number")return console.log('No es un numero');

//     numero = n.toString()
//     let reves = numero.split('').reverse().join('')
//     console.log(reves)


  

// }

// capi(205)

    





// // 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), 
// pe. miFuncion(5) devolverá 120.


























// // 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
//  o no, pe. miFuncion(7) devolverá true.

// const nprimo = (n)=>{
//     if(!n)return console.log('No ingresaste un numero');
//     if(typeof n!=="number")return console.log('No es un numero');
//     if(n%n == 0 && n%1 == 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }  
// nprimo(7)
// nprimo()
// nprimo(5)



// // 13) Programa una función que determine si un número es par o impar, 
// pe. miFuncion(29) devolverá Impar.

    // const par = n => n%2==0 ?console.log(`Es par`):console.warn(`No es par`)

    // par(5)
    // par(2)
    // par(25)



// // 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
//  pe. miFuncion(0,"C") devolverá 32°F.

        // const tempe = (N,T)=>{
        //     let R = 0
        //     if(T == 'C'){
        //         R = (N * 1.8) + 32
        //     }else if(T == 'F'){
        //         R = (N - 32)/1.8 
        //     }

        //    console.log(R)

        // }

        // tempe(10,'F')


//         15) Programa una función para convertir números de base binaria a decimal y viceversa, 
//         pe. miFuncion(100,2) devolverá 4 base 10.



























// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.




    // const descu = (m,d)=>{
    //     let r = 0 
    //     let f = 0

    //     r = (m * d) / 100 
    //     console.log(r)
    //     f = m - r
    //     console.log(`Se agrego un decuento del ${d}% a ${m} para un total de ${f}`)

    // }

    // descu(1000,20)













// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
//  pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).






// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.





// const  voco = (cadena) => {
//     arr = [...cadena]
//     console.log(arr)
//     const vocales = ['a','e','i','o','u']
//     const consonantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
//     let V = 0;
//     let C = 0;
//     let QV=[]
//     let QC=[]

//     arr.forEach(element => {

//         vocales.forEach(item => {
//             if (item == element) {
//                 QV.push(element)
//                 V ++
//             }
//         })

//         consonantes.forEach(items => {
//             if(items == element) {
//                 QC.push(element)
//                 C++;
//             }
//         })
        
//     });

    
//     console.log(V)
//     console.log('Que vocales',QV)
//     console.log(C)
//     console.log('Que vocales',QC)


    
    

// }

// voco('yeffer')



























// 19) Programa una función que valide que un texto sea un nombre válido,
//  pe. miFuncion("Jonathan MirCha") devolverá verdadero.


























// 20) Programa una función que valide que un texto sea un email válido, 
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.





// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
//  pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].


    // const elevar = (n)=>{

    //     let nevete = []

        
    //     n.forEach(items=>{
    //        nevete.push(items*items)
    //     })
    //     console.log(nevete)

    // }


    // elevar([2,4,5]) 






























// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. 
// miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].



// const mm = (n) => {
//     let menor =n[0];
//     let mayor =n[0];


//     n.forEach(items=>{

//         if(items>mayor){
//             mayor = items;
//         }

//         if(items<menor){
//             menor= items
//         }
//     })

//     console.warn(mayor,menor)


// }


// mm([2,56,2,4,85,12,-24,2,90,-66])























// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
//  en el primero almacena los números pares y en el segundo los impares, 
//  pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// let p={pares:[]}
// let i={impares:[]}

// const obj =(n)=>{

//     n.forEach(items=>{
//         if(items % 2 ==0){
//             p.pares.push(items)
//         }
//         if (items % 2 != 0){
//             i.impares.push(items)
//         }
//     })

//     console.log(p)
//     console.log(i)

// }



// obj([2,56,2,3,7,21,25,4,85,12,-24,2,90,-66])









// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
//  pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.



    // const ad =(arr)=>{
    //     arr1 =[...arr]
    //     arr2 =[...arr]

    //     x = {asc:[]}
    //     y = {desc:[]}
    //     x.asc  = arr1.sort((a,b)=> a-b);
    //     y.desc = arr2.sort((a,b)=> b-a);

    //     console.log(x)
    //     console.log(y)




    // }


    // ad([2,56,2,3,7,21,25,4,85,12,24,2,90,66])



































// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
//  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].



   

        


    
//     function masfrecunete(array) {

//         const respuesta = array.reduce((obj, element) => {
//             if (!obj[element]) {
//                 obj[element] = 1;
//             } else {
//                 obj[element] = obj[element] + 1;
//             }

//             return obj;

//         }, {})

//         console.info('respuesta', respuesta)


//         let = myArray = Object.entries(respuesta);
//         console.info('respuesta depues de Objet.entire', myArray)
//         let arrayfinal = []

//         myArray.forEach((elemento) => {
//             arrayfinal.push(elemento[0])
//         })

//         console.log(arrayfinal)

//     }





// masfrecunete([4, 3, 'p', 4, 'p', true, 8, false, true, 'p', 'x'])






























// 26) Programa una función que dado un arreglo de números obtenga el promedio,
//  pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.



    // const prome =(n)=>{
    //     let c = n.length
    //     let suma = 0
    //     n.forEach(items=>{
    //          suma = suma + items
    //     })
        
    //     promedio = suma/c

    //     console.log(promedio)

    // }


    // prome([9,8,7,6,5,4,3,2,1,0])

