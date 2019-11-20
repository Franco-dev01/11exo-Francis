let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')
let btn3=document.querySelector('.btn3')
let image=document.querySelector('img')


btn1.addEventListener('mouseover',(e)=>{
   document.body.style.backgroundColor='green'

   
})
btn1.addEventListener('mouseout',(e)=>{
    document.body.style.backgroundColor=''
    
})

btn2.addEventListener('mouseover',(e)=>{
    document.body.style.backgroundColor='gray'
})

btn2.addEventListener('mouseout',(e)=>{
    document.body.style.backgroundColor=''
    
})


btn3.addEventListener('mouseover',(e)=>{
   document.body.style.backgroundColor='yellow'
});
btn3.addEventListener('mouseout',(e)=>{
        document.body.style.backgroundColor=''
        
    })
    

image.addEventListener('mouseover',(e)=>{
    image.setAttribute('src','images (9).jpg');
   

    image.addEventListener('mouseout',(e)=>{
        image.setAttribute('src','a (3).jpg');
      
    
    })

})