const value = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']



let button  = document.getElementById("but")
let code = document.getElementById("colorcode")




button.addEventListener("click",function(){
    hex = '#';
    for(let i =0;i<6;i++){
        hex += getcode()
    }

    document.body.style.backgroundColor = hex;
    code.textContent = hex;

})


function getcode(){
    return Math.floor(Math.random() * value.length)
}