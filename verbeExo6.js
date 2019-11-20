var inp=document.querySelector('input')
var view=document.querySelector('p')
var btn=document.querySelector('.btn')


function voir(){
    var g=inp.value.toString().slice(inp.value.length-2,inp.value.length)
    
     if(g==='er'){

        var h=inp.value.toString().slice(0,inp.value.length-2)+'eur'
        view.textContent=h
     }else{
        view.textContent='ce verbe n\'est pas un verbe du 1er groupe'
        view.style.color='red'
     }
}
    