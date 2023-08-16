//1. THIS CALCULATOR QUESTION DONE BY USING OBJECT INSIDE THE QUESTION 
function calculator(a,b,operator){
    let obj={
        '+':function(a,b){
            console.log(a+b);
        },
        '-' :function(a,b){
            console.log(a-b);
        },
        '*':function(a,b){
            console.log(a*b);
        },
        '/':function(a,b){
            console.log(a/b);
        }
    };
    obj[operator](a,b);
}
// calculator(5,10,'-');

//=============================================================