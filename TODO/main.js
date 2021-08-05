let addtobutton = document.getElementById('addto');
let container = document.getElementById("todocontainer");
let input = document.getElementById("inputfield")

addtobutton.addEventListener("click",function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-style')
    paragraph.innerText = input.value;
    container.appendChild(paragraph);
    input.value = "";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        container.removeChild(paragraph);
    })

})