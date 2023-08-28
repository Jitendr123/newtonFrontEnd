// code to disable button and fill the progress bar
const userName = document.getElementById("username-input");
const email = document.getElementById("email-handler-input");
const server = document.getElementById("server-input");
const pass = document.getElementById("password-input");
const collageName = document.getElementById("college-input");
const checkBox = document.getElementById("conditions-input");
const submitBtn = document.getElementById("submit-button");
let userNameExist=false;
let email1Exist=false;
let email2Exist=false;
let passExist=false;
let collExist=false;
let consditionExist=false;
checkSubmitBtn();
console.log(userName);

function checkSpace(data){
    const spaceRegex = /\s/;
    return !spaceRegex.test(data);
}

function checkServer(data){
    const emailRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(data);
}


userName.addEventListener("input",(event)=>{
    console.log("name",event.target.value);
    userNameExist=false;
    if(event.target.value!=null && event.target.value!=""&& checkSpace(event.target.value)){
       userNameExist=true;
       checkSubmitBtn();
    }
})

email.addEventListener("input",(event)=>{
    email1Exist=false;
    if(event.target.value!=null && event.target.value!=""&& checkSpace(event.target.value)){
       email1Exist=true;
       checkSubmitBtn();
       console.log("email",event.target.value);
    }
})

server.addEventListener("input",(event)=>{
    email2Exist=false;
    if(event.target.value!=null && event.target.value!=""){
       email2Exist=true;
       checkSubmitBtn();
       console.log("server",event.target.value);
    }
})

pass.addEventListener("input",(event)=>{
    passExist=false;
    if(event.target.value!=null && event.target.value!=""){
       passExist=true;
       checkSubmitBtn();
       console.log("pass",event.target.value);
    }
})

collageName.addEventListener("input",(event)=>{
    collExist=false;
    if(event.target.value!=null && event.target.value!=""&& checkSpace(event.target.value)){
       collExist=true;
       checkSubmitBtn();
       console.log("pass",event.target.value);
    }
})

checkBox.addEventListener("input",(event)=>{
    consditionExist=false;
    if(event.target.value!=null && event.target.value!=""&& checkSpace(event.target.value)){
       consditionExist=true;
       checkSubmitBtn();
       console.log("check",event.target.value);
    }
})

function checkSubmitBtn(){
    console.log("userName",userNameExist,'/n',
                "email1",email1Exist,email2Exist,'/n',
                "coll",collExist,'/n',
                "pass",passExist,'/n',
                "condition",consditionExist     )
    if(consditionExist && email2Exist && email1Exist && collExist && passExist && userNameExist){
       submitBtn.disabled=false;
       console.log(false);
    }else{
        submitBtn.disabled=true;
        console.log(true);
    }
}