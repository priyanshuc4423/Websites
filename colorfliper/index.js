
const colors = ['red','green','yellow','blue','orange'];

let button = document.getElementById('but');
let code = document.getElementById("colorcode");


button.addEventListener("click",function(){
       let random_number = getnumber(); 
       document.body.style.backgroundColor = colors[random_number];
       code.textContent = colors[random_number];

})


function getnumber(){
    return Math.floor(Math.random() * colors.length)
}