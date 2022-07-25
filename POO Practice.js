/**
  @author Mircha 
*/


/*

function Team(nombre,apodo,estadio){
    this.nombre = nombre;
    this.apodo = apodo;
    this.estadio = estadio;  

} 

Team.prototype.canto = function(){
    console.log(`Los de ${this.nombre} Somos la hinchada mas grande del mundo`)
}

//HERENCIA PROTOTIPICA

function ArgentinaTeam(nombre,apodo,estadio,ciudad){
    this.super = Team;
    this.super(nombre,apodo,estadio);
    this.ciudad = ciudad; 
    
}

//Argenyonateam esta heredendo de team 
ArgentinaTeam.prototype = new Team();
ArgentinaTeam.prototype.constructor = ArgentinaTeam;


//Sobreescribir un metodo del prottotipo padre

ArgentinaTeam.prototype.canto = function(){
    console.log(`Los de ${this.nombre} Somos la hinchada  mas grande de la argentina`)
}
ArgentinaTeam.prototype.ubica = function(){
    console.log(`Los de ${this.nombre} Somos de la ciudad ${this.ciudad}`)
}

*/


// const Boca = new Team("Boca Jrs","Xeneixe","La Mombonera")
// const Racing = new Team("Racing","La Academia","Amalfitani")
// const Inde = new ArgentinaTeam("Independinete","El rojo","LA caldera","Avellaneda")

// console.log(Boca)
// console.log(Racing)
// console.log(Inde)

// Boca.canto()
// Inde.canto()
// Inde.ubica()





// AZUCAR SINTATICAA  CLASES Y HERENCIA DE

// class Team{
//   //El contrecutoir es un metodo especial 
//   //que se ejecuto en el momento de insytanciar la clase
//     constructor(nombre,apodo,estadio){
//         this.nombre = nombre;
//         this.apodo = apodo;
//         this.estadio = estadio;
//     }

//     //metodo
//     canto(nombre){
//         console.log(`Los hinchas de ${this.nombre} cantamos siempre`)
//     }
// }


// const boca = new Team("Boca Jrs","Xeneixe","Bombonera")

// boca.canto()


// class ArgentinaTeam extends Team{
//     constructor(nombre,apodo,estadio,city){
//         super(nombre,apodo,estadio)
//         this.city = city;
//     };

//     canto(nombre,city){
//         console.log(`Los hinchas de ${this.nombre} cantamos siempre en la ciudad de ${city}`)
//     }

//     ubi(nombre,estadio){
//         console.log(`${this.nombre} juega en el esatadio ${this.estadio}`)
//     }
// }
// console.log(boca)

// const Newlls = new ArgentinaTeam("Newwles","El pincha","Amalfinatni","Rosario" )

// console.log(Newlls)
// Newlls.canto()
// Newlls.ubi()








 





/**
  @author JUAN DAVID (PLATZI) 
*/







//OBJETO LITERAAAL
// const boca = {
//     nombre : "Boca",
//     ciudad : "buenos aires",
//     titulos : [
//         "Libertadores del 2003",
//         "Libertadores del 2005",
//         "Libertadores del 2006",
//     ],

//     nuevoTitulo(titulo){

//         this.titulos.push(titulo)
//     }
// }

//  //Hacer que cante
// boca.titulos.push("Libertadores del 2008")
// boca.nuevoTitulo("Libertadores del 2010")
// console.log(boca)


 


// CREAR NUESTRO prottotipo

// function Team(nombre,ciudad, titulo){
//     this.nombre= nombre;
//     this.ciudad= ciudad;
//     this.titulo = titulo
// }

// Team.prototype.nuevotitulo = function(galardon) {
//     this.titulo.push(galardon)
// }

// const Boca = new Team("Boquita","Buenos Aires",[])













//PROTOTIPO CON LA SINTAXYS DE CLASES

// class Team{
//     constructor(nombre,ciudad, titulo){
//         this.nombre= nombre;
//         this.ciudad= ciudad;
//         this.titulo = titulo

//     }

//     nuevotitulo(galardon) {
//         this.titulo.push(galardon)
//     }

// }

// const Boca = new Team("Boquita","Buenos Aires",[])














// RECIBIR OBJETO COMO PARAMETRO


// class Team{
//     constructor({
//         nombre,
//         ciudad ="Alguna de Argentina", 
//         titulo 
//     }){

//         this.nombre= nombre;
//         this.ciudad= ciudad;
//         this.titulo = titulo

//     }

//     nuevotitulo(galardon) {
//         this.titulo.push(galardon)
//     }

// }

// const Boca = new Team({
//     nombre:"Boca",
//     titulo: 5,
//     ciudad:"Carta "

// })













//


// class Team {
//     constructor({
//         nombre,
//         ciudad,
//         conferecnia,
//         estadio

//     }){
//         this.nombre = nombre;
//         this.ciudad = ciudad;
//         this._estadio = estadio;
//         this._conferecnia = conferecnia;
//     }

//     get estadio() { return this._estadio; }

//     set estadio(ne){
//         if(ne === "bom"){
//             console.error("SOY de RIBEr PUTOO")
//         }else{
//             this._estadio = ne
//         }
//     }
// }

// const bulls = new Team({
//         nombre:"Buls",
//         ciudad : "Chicago",
//         conferecnia :"Oeste",
//         estadio : "Stuar Grand"
// })
// const celtic = new Team({
//         nombre:"Celtic",
//         ciudad : "Boston",
//         conferecnia :"Oeste",
//         estadio : "Trebol Stadium"
// })
// const lakers = new Team({
//         nombre:"Lakers",
//         ciudad : "LA - Los angeles",
//         conferecnia :"Este",
//         estadio : "Stuard Magical Grand"
// })




// class Jugador{
//     constructor({
//         nombre,
//         apodo   = nombre,
//         equipo =[],
//         titulos = [],
//         allstart = [],
//         totalpuntos = 0,
//         totalrebotes = 0,
//         totalasistencias = 0,


//     }){
//         this.nombre  = nombre;
//         this.equipo  = equipo;
//         this.apodo   = apodo ;
//         this.titulos = titulos;
//         this.allstart= allstart;
//         this.averags = {
//             totalasistencias,
//             totalrebotes,
//             totalpuntos
//         };

//     }
// }

// const jordan = new Jugador ({ 
//         nombre : "Michael jordan",
//         equipo : [bulls,celtic],
//         apodo : "GOAT",
//         titulos : ["95s","96s"],
//         allstart :["Cleveland 1995","Orlando 2001","Los angeles 2005"],
//         totalpuntos : 22510,
//         totalrebotes : 856,
//         totalasistencias : 1862,
// })



// class SoccerPlayer extends Jugador {
//     constructor(props){
//         super(props);
//     }
// }

// class BasketPlayer extends Jugador {
//     constructor(props){
//         super(props);
//     }
// }


// console.log(jordan);















