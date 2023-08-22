let btn = document.querySelector('#btn');
let body = document.body;
let text = document.querySelector('.white')
let text1 = document.querySelector('.white1')
let footer1 = document.querySelector(".mainFooter")

btn.addEventListener('click', Change)

function Change(e){
    if(btn.textContent.includes('White')){
        body.className = 'light'
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        btn.textContent = 'Dark'
        body.style.color = 'black'
        footer1.style.backgroundColor = 'whitesmoke'
       
    }
    else{
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        btn.textContent = 'White'
         body.className = 'dark'
        body.style.color = 'white'
        footer1.style.backgroundColor = 'black'
    }
   
}