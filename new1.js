
let API = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data='

let input = document.getElementById("inp");
let div = document.querySelector('.class')
console.log(input)

input.addEventListener('keypress',(e)=>{
    if(e.code == "Enter")
    generate();
})
function generate(){
    div.innerHTML = ""
    let input_val = input.value;
    console.log(input_val)
    let image = document.createElement('img')
    image.src = API + input_val 
    div.appendChild(image)
}
