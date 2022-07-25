
    /**
     @author  CALLBACK

    */



    function sum (a,b){
        return a + b;
    }

    function calc(a,b,callback){
        return callback(a,b);
    }

    console.log(calc(2,2,sum));




    function date (callback){
        console.log(new Date);
        setTimeout(function(){
            let date = new Date;
            callback(date);
        },2500)
    }

    function printDate (dateNow){
      console.log(dateNow);
    }

    date(printDate);




























    
    /**
     @author  PROMESAs

    */



     const somethingWillhappen =()=>{

        return new Promise((resolve, reject)=>{
            if(true ){
                resolve(`Yhea!! We'r  runing a fuck*ng Promise`)
            }else{
                reject(`Son of a B*tch, that shit is't running`)
            }
        })

     }

 somethingWillhappen().then(response=>console.warn(response)).catch(err=>console.error(err))


 const somethingWillhappen2 =()=>{

    return new Promise ((resolve,reject)=>{
        if (true){
            setTimeout(()=>{
                resolve(`I dont know bro,l this fucking fat man is writing whatever he want, OOO SHIT i came late `);
            }, 3000)

        }else{
            const error = new Error (`What the hell is going On`);
            reject(error)
        }
    })

 }

 somethingWillhappen2().then(response=>console.warn(response)).catch(err=>console.error(err))












// //  PROMESAS ANIDADAS -> NOS DEVUELVE UN ARRAY




 Promise.all([somethingWillhappen(), somethingWillhappen2()])
 .then(response=>{
     console.warn('Shut up your fucking mouth', response);
     })
 .catch(err=>{
     console.error(err)
    });    



































    
    /**
     @author  ASYNC Y AWAIT

    */





     const doSomethingAsync = () =>{
         return new Promise((resolve,reject)=>{
             (true)
             ? setTimeout(()=>resolve(`This sh*t is other word`),3000)
             : reject(new Error(`I don't lnow what is wrong`))
         });
     }

     const doSomething = async()=>{
         const something = await doSomethingAsync();
         console.log(something)
     }


     
     console.log(`before`)
     doSomething()
     console.warn(`after`)
     
     
     
     const anotherFu = async() =>{
         try{
             const something = await doSomethingAsync();
             console.log(something)
            }catch(err){
                console.log(err)
            }

     }

     

            
     console.log(`before`)
     anotherFu()
     console.warn(`after`)


















































    

    
    /**
     @author  SET TIME OUT 

    */

        setTimeout(() => {
            console.log(`Ñaaa`)
        }, 2000);
        
        
        
        setInterval(() => {
            
            console.log(new Date().toLocaleString())
        }, 1000);





























