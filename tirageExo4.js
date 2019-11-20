let ip=document.querySelector('.inp')
let view=document.querySelector('div')
let arr=[];

function btn(){
    arr.push(ip.value)
    console.log(arr)
}
function lancer(){
    view.textContent=arr[Math.floor(Math.random()*(arr.length-0+1))+0]+' est le gagnant';
    view.style.color='green'
    
}
