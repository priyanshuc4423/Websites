let up = document.getElementById('up')
let reset = document.getElementById('reset')
let down = document.getElementById("down")
let number = document.getElementById('number')


let value = parseInt(number.innerHTML)


up.addEventListener('click',function(){
    
    value++
    number.innerHTML = value

    if(value > 0){
        number.style.color = 'green'
    }else if(value == 0){
        number.style.color = 'black'
    }
    

})

down.addEventListener('click',function(){
    value--
    number.innerHTML = value
    if (value <0){
        number.style.color = 'red'
    }
    else if(value == 0){
        number.style.color = 'black'
    }
})



reset.addEventListener("click",function(){
    value = 0
    number.innerHTML = 0
    number.style.color = 'black'

})



