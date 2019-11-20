let nb1
let nb2
let nb3
do{
    nb1=prompt('entre le 1er nombre')
    if(isNaN(nb1)){
        alert('entre un nombre svp')
    }
}while(isNaN(nb1));

do{
    nb2=prompt('entre le 2eme nombre')
  
}while(isNaN(nb2));
do{
    nb3=prompt('entre le 3eme nombre')
   
}while(isNaN(nb3));

if(nb1===nb2 && nb2===nb3){
    alert('les trois variables sont indentiques')
}else if((nb1===nb2 || nb1===nb3 || nb2===nb3 ||nb2===nb1)){
    alert('deux variables sont indentiques')
}else{
    alert('les trois variables sont differents')
}


