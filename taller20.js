/**
  @author Mircha 
*/

  // 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
  //  devolverá 10.

  const contarC =(s="")=>(!s)?console.warn("No le metiste nada Che"):console.log(`La cadena ${s} tiene ${s.length}`)

  //contarC("Yeffer")
  //contarC()

  // 2) Programa una función que te devuelva el texto recortado según el número de caracteres 
  // indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".


  const recortarC =(s="",longitude=undefined)=>
  (!s)?console.warn("No le metiste nada Che")
  :(longitude===undefined)
  ?console.error("No metste nada Che de laongi")
  :console.info(s.slice(0,longitude));

  // recortarC()
  // recortarC('yeffer',2)
  // recortarC('yeffer')



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter
// , pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

