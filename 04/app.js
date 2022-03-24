console.log('04');
const element1 = document.getElementById('wrap');
const element2 = document.querySelector('.item');
const elements  = document.querySelectorAll('div');

console.log(elements)

const div = document.createElement('div');
div.style.border = "1px solid red";
div.innerHTML = "hello!!";

document.body.appendChild(div);

document.querySelector('#wrap').innerHTML = 111;

element1.removeChild(element1.children[0]);
element1.remove();

window.addEventListener('load', function(){
    this.alert("load");
});

window.onload=function(){
    alert("load2")
}

var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});

var app = document.getElementById("list");

app.addEventListener("click", function(event) {
    if(event.target.nodeName == "LI"){
        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
        console.log("")
    }
});
var link = document.querySelector('a');
link.addEventListener('click', function(event) {
    window.open("https:/www.dqum.net");
    event.preventDefault();
})