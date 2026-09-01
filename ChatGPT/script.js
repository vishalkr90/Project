document.getElementById("theme").onclick=()=>{

document.body.classList.toggle("dark");

}


let questions=[

{
q:"Java is?",
options:["Language","OS","Compiler"],
answer:"Language"
},

{
q:"OS means?",
options:[
"Operating System",
"Open Source",
"Office System"
],
answer:"Operating System"
}

];

let current=0;

showQuestion();

function showQuestion(){

document.getElementById("question").innerHTML=
questions[current].q;

let optionHTML="";

questions[current].options.forEach(op=>{

optionHTML+=`<button>${op}</button>`;

});

document.getElementById("options")
.innerHTML=optionHTML;

}


function next(){

if(current<questions.length-1){

current++;

showQuestion();

}

}


function prev(){

if(current>0){

current--;

showQuestion();

}

}


let hours=
localStorage.getItem("hours")||0;

document.getElementById("hours")
.innerHTML=hours;


function addHours(){

hours++;

localStorage.setItem(
"hours",
hours
);

document.getElementById("hours")
.innerHTML=hours;

}



function askAI(){

let msg=document.getElementById("msg").value;

let chat=document.getElementById("chat");

chat.innerHTML+=
`<p><b>You:</b>${msg}</p>`;

chat.innerHTML+=
`<p><b>AI:</b>This is AI placeholder. Connect Gemini/OpenAI API here.</p>`;

}