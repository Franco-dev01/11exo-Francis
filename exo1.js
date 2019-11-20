
function caractere(){
   
    let mot =prompt('entrer un mot contenent des ""')
    for(let i=0; i<mot.length;i++){

       var mmb = mot.slice(0,1)
       var mma = mot.slice(mot.length-1,mot.length)
       if(mmb===mma){
        alert(mot)
       }else{
           alert('entre un mot contenent ""')
       }
    }
   
}