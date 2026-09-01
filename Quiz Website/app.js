const API="https://opentdb.com";

let state={

questions:[],
current:0,

answered:0,
correct:0,
wrong:0,

token:null
};


const categorySelect=
document.getElementById("category");

const difficultySelect=
document.getElementById("difficulty");

const quiz=
document.getElementById("quiz");

const nextBtn=
document.getElementById("nextBtn");

const msg=
document.getElementById("message");


async function getCategories(){

let res=
await fetch(
`${API}/api_category.php`
);

let data=
await res.json();

data.trivia_categories.forEach(c=>{

let op=
document.createElement("option");

op.value=c.id;

op.textContent=c.name;

categorySelect.appendChild(op);

});

}


async function getToken(){

let saved=
JSON.parse(
localStorage.getItem("token")
);

if(saved){

let age=
Date.now()-saved.time;

if(age<21600000){

state.token=saved.token;
return;
}

}

let res=
await fetch(
`${API}/api_token.php?command=request`
);

let data=
await res.json();

state.token=data.token;

localStorage.setItem(
"token",
JSON.stringify({
token:data.token,
time:Date.now()
})
);

}



function decode(text){

return decodeURIComponent(text);

}



async function fetchQuestions(){

msg.textContent="Loading...";

let url=
`${API}/api.php?amount=10&encode=url3986&token=${state.token}`;

if(categorySelect.value)
url+=`&category=${categorySelect.value}`;

if(difficultySelect.value)
url+=`&difficulty=${difficultySelect.value}`;


try{

let res=
await fetch(url);

let data=
await res.json();

handleResponse(data);

}

catch{

msg.textContent=
"Network error";
}

}


async function handleResponse(data){

switch(data.response_code){

case 0:

state.questions=
data.results;

state.current=0;

render();

break;


case 1:

msg.textContent=
"No results";

break;


case 3:

await getToken();

fetchQuestions();

break;


case 4:

await fetch(
`${API}/api_token.php?command=reset&token=${state.token}`
);

fetchQuestions();

break;


case 5:

msg.textContent=
"Too many requests retrying in 5 sec";

setTimeout(
fetchQuestions,
5000
);

break;


default:

msg.textContent=
"Error";
}

}


function shuffle(arr){

return arr.sort(
()=>Math.random()-0.5
);

}



function render(){

quiz.innerHTML="";

nextBtn.disabled=true;

let page=
state.questions.slice(
state.current,
state.current+5
);

let answeredPage=0;

page.forEach((q,index)=>{

let box=
document.createElement("div");

box.className="question";

let title=
document.createElement("h3");

title.textContent=
decode(q.question);

box.appendChild(title);


let answers=[
q.correct_answer,
...q.incorrect_answers
];

shuffle(answers);

answers.forEach(ans=>{

let btn=
document.createElement("button");

btn.className="option";

btn.textContent=
decode(ans);

btn.onclick=()=>{

if(btn.dataset.done)
return;

btn.dataset.done=true;

if(
ans===q.correct_answer
){

btn.classList.add(
"correct"
);

state.correct++;

}

else{

btn.classList.add(
"wrong"
);

state.wrong++;

}

state.answered++;

answeredPage++;

updateScore();

if(
answeredPage===page.length
){
nextBtn.disabled=false;
}

};

box.appendChild(btn);

});

quiz.appendChild(box);

});

}



function updateScore(){

document.getElementById(
"answered"
).textContent=
state.answered;

document.getElementById(
"correct"
).textContent=
state.correct;

document.getElementById(
"wrong"
).textContent=
state.wrong;

document.getElementById(
"progress"
).textContent=
`${state.answered%5}/5`;

save();

}



function save(){

localStorage.setItem(
"quizState",
JSON.stringify(state)
);

}



function load(){

let data=
JSON.parse(
localStorage.getItem(
"quizState"
)
);

if(data){

state=data;

render();

}

}



nextBtn.onclick=()=>{

state.current+=5;

if(
state.current>=10
){

fetchQuestions();

}
else{

render();

}

};



document
.getElementById(
"startBtn"
)
.onclick=
async()=>{

await getToken();

fetchQuestions();

};



document
.getElementById(
"themeBtn"
)
.onclick=()=>{

document.body
.classList
.toggle(
"dark"
);

};


load();

getCategories();