var inp=document.querySelectorAll('.inp');
var valider=document.querySelector('.valider');
var view=document.querySelector('p');


function j(){
    if(inp[0].value===''||inp[1].value===''||inp[2].value===''||inp[3].value===''){
        view.style.color="red"
        view.textContent="tout les champs doivent etre remplit"
    }else{
        view.innerHTML=inp[0].value+"<br>"
        view.innerHTML+=inp[1].value+"<br>"
        view.innerHTML+=inp[2].value+"<br>"
        view.innerHTML+=inp[3].value+"<br>"
        view.style.color='black'
    }
  
}