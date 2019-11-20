let heure=document.querySelector(".heure")
let minute=document.querySelector(".minute")
let second=document.querySelector(".second")

let secon,heur,minu;
secon=0;
heur=0;
minu=0;
second.textContent=secon.toString();
function chrono(){
    secon++;
    second.textContent=secon.toString();
    if(secon===60){
       second=0
       minu++;
       second.textContent=secon.toString();
        minute.textContent=minu.toString();
        if(minu===60){
            minu=0;
            minute.textContent=minu.toString();
            heur++
            heure.textContent=heur.toString();
        }
    }
    if(heur <3){
        setTim	eout(chrono,1000);
    }
}
chrono();

function pause(){
    heur=12;

}
function conti(){
    heur = parseInt(heure.textContent);
    chrono();

}
function ret(){
    location.reload()
}




    
