/* El método filter () devuelve los valores coincidentes en una matriz de la colección. 
Verificará todos los valores de la colección 
y devolverá los valores coincidentes en una matriz*/

let arr = ["Yeffer", "Yefire", "Anilio", "Fire"];



for (var i = 0; i < arr.length; i++){ 
    
    console.log(`Hola, ${arr[i]} sos crack`)
}


for (var student of arr) {
    
    console.log(`Hola, ${student} sos crack`)
}



function saludar(people){
    console.log(`Hola, ${people}`)
}

while (arr.length > 0){
    console.log(arr)
    var arr2 = arr.shift();
    saludar(arr2);
}




//ARRAY DE OBJTOS 


let equipos = [
    {nombre:"Boca", titulos:"6"},
    {nombre:"Racing", titulos:"2"},
    {nombre:"Riber", titulos:"4"},
    {nombre:"San Lorenzo", titulos:"1"},
    {nombre:"Estudiante", titulos:"4"},
    {nombre:"Independiete", titulos:"7"},
    {nombre:"Santos", titulos:"4"},
    {nombre:"Botafogo", titulos:"2"},
    {nombre:"flamengo", titulos:"3"},
    {nombre:"Newells", titulos:"0"},
];



/* El método filter () devuelve los valores coincidentes en una matriz de la colección. 
Verificará todos los valores de la colección 
y devolverá los valores coincidentes en una matriz*/



let grandes = equipos.filter(function(team){

    return team.titulos >= 3
})

console.log(grandes)


/* mapea el arreglo y crea un nuevo arreglo*/
/*
let argentinos = equipos.map(function(team){

    return team.nombre 
})

console.log(argentinos)


/* El método find () devuelve el primer valor que coincide de la colección. 
Una vez que coincida con el valor en los resultados, 
no verificará los valores restantes en la colección de matriz.*/

let encuentraequipo = equipos.find(function(team){
    return team.nombre === "Boca"
})

console.log(encuentraequipo)


/* Recorre todo el array*/

equipos.forEach(function(team){
    if(team.titulos > 0){

        console.log(`El equipo ${team.nombre} Tiene un total de ${team.titulos} Libertadores de America`)
    }else{
        console.log(`El equipo ${team.nombre} no tiene liberadores de America`)

    }

})

/*Valida y devuelce un true o false dependiendo del resultado*/


var masde10 = equipos.some(function(team){
    return team.titulos >1
})

console.log(masde10)







/**
  @author  CURSO DE PLATZI DE MANIPULACION DE ARRAY
*/




/**
  @author  fOR EACH
*/


    const array = [1,2,3,4,5,6,8];

    array.forEach(item => console.log(item))


    //Agregando a HTML
    const product = [
        {title: 'burguer', precio: 110},
        {title: 'Pitzza', precio: 210},
        {title: 'Ñame', precio: 410},
        {title: 'Ñorizoo', precio: 10}
    ];

    const app = document.getElementById('app');
    product.forEach(a=>{
        app.innerHTML += `<li> ${a.title} - ${a.precio}</li>`
    }) 






































    /**
     @author  MAP

    */


    const equiposS =['RiBer', 'Boca Jrs', 'Racing'];
    

//DE LA FORMA LARGA

    const neSwArray =[];
    for (let index = 0; index < equipos.length; index++) {
        const element = equipos[index];
        newArray.push(element + ' ++')
    }
    console.log(equipos)
    console.log(newArray)
    
    
    const newArray = equipos.map(item=> item + ' ++')
    console.log(newArray)
    console.log(equipos)
    







    // AGREGANDO A HTML

      const productO = [
        {title: 'burguer', precio: 110},
        {title: 'Pitzza', precio: 210},
        {title: 'Ñame', precio: 410},
        {title: 'Ñorizoo', precio: 10}
    ];

    const appS = document.getElementById('app');
    const list = product.map(product => {
        return `<li> ${product.title} - ${product.precio}</li>`
    });

    app.innerHTML=list.join('');

    




    /**
     @author  MAP RELOADE

    */


     const equipo1 = [
         {
             nombre :'boca jrs',
             apodo: 'Xeneixe',
             Nhinchas: 12      
        },
         {
             nombre :'riBer',
             apodo: 'Millo',
             Nhinchas: 125      
        },
         {
             nombre :'Independiete',
             apodo: 'El tojo',
             Nhinchas: 22      
        }

     ]

    //  //EXTRAER ELEMENTO DE UN OBJETO
     
     
     const rta = equipos.map(item =>item.Nhinchas)
     
     console.log(equipos)
     console.log(rta)
     
     //AGREGAR ELEMENTO DE UN OBJETO
     
     const rta2 = equipos.map((item)=>{
         return{
             ...item,
             bono: 5
         }
     }) 


   
     console.log(rta2)









































    /**
     @author  FILTER

    */

    //  FILTAR ELEMENTOS CON BASE A UNA CONDICIN


    //  FILTRANDO UN ARRAY DE STRING


     const equipo2 =['RiBer', 'Boca Jrs', 'Racing'];


     const rta4 = equipos.filter(item => item.length >= 6)
     console.log(rta)



     // FILTRANDO UN ARRAY DE OBJETOS
     
     const team = [
         {
             nombre :'boca jrs',
             apodo: 'Xeneixe',
             Nhinchas: 12 ,
             bicampeon: true     
        },
         {
             nombre :'riBer',
             apodo: 'Millo',
             Nhinchas: 125 ,
             bicampeon: false   
        },
         {
             nombre :'Independiete',
             apodo: 'El tojo',
             Nhinchas: 22 ,
             bicampeon: false    
        },
        {
            nombre :'Palmeiras',
            apodo: 'Condors',
            Nhinchas: 22 ,
            bicampeon: true    
       },
       {
        nombre :'flamengo',
        apodo: 'canarinha',
        Nhinchas: 202 ,
        bicampeon: true    
   }

      ]





      const rta3 = team.filter(item => item.bicampeon && item.nombre.length>=6)
      console.log(rta2)


      const search = (cadena)=>{
          return team.filter(item =>{
              return item.nombre.includes(cadena);
          })

      }


      console.log(search('ca'))


     




















































    /**
     @author  REDUCE

    */


    // REEUCE UN ARRAY A UN SOLO VALOR 


     const arr1 =  [1,2,5,4,5,6,7,8,5];

     let sum = 0;

     const rta5 = arr.reduce((sum, element)=> sum + element, 0);

     console.info(rta)





      /**
     @author  REDUCERELOADE

    */

     const rta6 = arr.reduce((obj, element)=>{
         if(!obj[element]){
             obj[element] = 1;
         }else{
             obj[element] = obj[element] +1;
         }
         return obj;
     
     }, {});

     console.info(rta2)















// EJERCICIO PARA EL CHABON


     function masfrecunete (array){

        const respuesta = array.reduce((obj, element)=>{
                 if(!obj[element]){
                     obj[element] = 1;
                 }else{
                     obj[element] = obj[element] +1;
                 }

                
                 console.log(obj)
                 return obj;
             
             }, {});
        
            console.info(respuesta)


             let = myArray = Object.entries(respuesta);
            //  console.info(myArray)
            let cumulo = 0;
            let mayor = 0

             myArray.forEach((elemento)=>{
                 if(elemento[1]> cumulo){
                     cumulo = elemento[1];
                     mayor = elemento[0]


                 }
                //  console.log(elemento[1])
                 
                })
                
                console.log(`el numero que mas se repite ${mayor} & se repite ${cumulo} ocacione(s)  `)

     }
  
     
     masfrecunete([4,3,5,4,5,6,8,5,8])
    //  masfrecunete([4,3,8,4,8,6,8,8,8])
    //  masfrecunete([1,1,2])



























































/**
 @author  SOME    
 */

     // NOS DICE SI ALGUN ELEMNTO CUMPLE CON ALGUNA CONDICIONAL DEVUELVE TRUE


     const equipos5 =['RiBer', 'Boca Jrs', 'Racing'];
     
    const rta8 = equipos.some(item=> item.length>5);
    console.log(rta)

    const team8 = [
                 {
                     nombre :'boca jrs',
                     apodo: 'Xeneixe',
                     Nhinchas: 12 ,
                     bicampeon: true     
                },
                 {
                     nombre :'riBer',
                     apodo: 'Millo',
                     Nhinchas: 125 ,
                     bicampeon: false   
                },
                 {
                     nombre :'Independiete',
                     apodo: 'El tojo',
                     Nhinchas: 22 ,
                     bicampeon: false    
                },
                {
                    nombre :'Palmeiras',
                    apodo: 'Condors',
                    Nhinchas: 22 ,
                    bicampeon: true    
               },
               {
                nombre :'flamengo',
                apodo: 'canarinha',
                Nhinchas: 202 ,
                bicampeon: true    
           }
        
              ];

              const rta9 = team.some(item => item.bicampeon == true);
              console.log(rta2)












































     
/**
 @author  EVERY    
 */

     // NOS DICE SI TODOS LOS ELEMNTO CUMPLE CON ALGUNA CONDICIONAL DEVUELVE TRUE


      const team10 = [
                 {
                     nombre :'boca jrs',
                     apodo: 'Xeneixe',
                     Nhinchas: 12 ,
                     bicampeon: true     
                },
                 {
                     nombre :'riBer',
                     apodo: 'Millo',
                     Nhinchas: 125 ,
                     bicampeon: false   
                },
                 {
                     nombre :'Independiete',
                     apodo: 'El tojo',
                     Nhinchas: 22 ,
                     bicampeon: false    
                },
                {
                    nombre :'Palmeiras',
                    apodo: 'Condors',
                    Nhinchas: 22 ,
                    bicampeon: true    
               },
               {
                nombre :'flamengo',
                apodo: 'canarinha',
                Nhinchas: 202 ,
                bicampeon: true    
           }
        
              ];


              const rta10 = team.every(item => item.Nhinchas > 100);
              console.log(rta);







































































    /**
 @author  FIND 
 */

    // RETORNA SOLO UN OBJETO QUE CUMPLE CON LA CONDICION EL PRIMERO 



    const team12 = [
                 {
                     nombre :'boca jrs',
                     apodo: 'Xeneixe',
                     Nhinchas: 12 ,
                     bicampeon: true     
                },
                 {
                     nombre :'riBer',
                     apodo: 'Millo',
                     Nhinchas: 125 ,
                     bicampeon: false   
                },
                 {
                     nombre :'Independiete',
                     apodo: 'El tojo',
                     Nhinchas: 22 ,
                     bicampeon: false    
                },
                {
                    nombre :'Palmeiras',
                    apodo: 'Condors',
                    Nhinchas: 22 ,
                    bicampeon: true    
               },
               {
                nombre :'flamengo',
                apodo: 'canarinha',
                Nhinchas: 202 ,
                bicampeon: true    
           }
        
              ];


    const rta12 = team.find(item=> item.bicampeon === true)
    console.log(rta)






























































    
    /**
 @author  INCLUDE
 */

    // RETORNA TRUE SI EL LEMENTO ESTA INCLUDO EN EL ARRAY 


    // const team = ['riBer','Boca'     ];


    // const rta = team.includes('riBer')
    // console.log(rta)



















































        /**
 @author  JOIN
 */

    // // separar un array por un parametro

    // const array = ['Andrea', 'Leonor', 'Camila']

    // const newA = array.join(' ')
    // console.log(newA)




        /**
 @author  SPLIT
//  */
//         // CONVIERTE UN CADENA A EN ARRAY POR PARAMETROS

//     const title = 'Somos el real madris los mas grande de europa'

//     const newTitle =  title.split(' ').join('/').toUpperCase()
//     console.log(newTitle)





















































        /**
 @author  CONCAT
 */



    //UNE DOS ARRAYS EN UNO SOLO

    // const t =['BOCA', 'RACING', 'CORINTIAA']
    // const a =['BARCA', 'REAL', 'CUCUTA']


    // const r1 = [...a, ...t]
    // console.log(r1)
    
    
    // const r2 = [...a, ...[1,5,3,9]]
    // console.log('r2', r2)
    
 
    
















































           /**
 @author  FLAT
 */






























