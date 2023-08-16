const bigBoxEvent=document.querySelectorAll("#big-box div");
const O_Text="O";
const X_Text="X";
var currentPlayer=X_Text;


    bigBoxEvent.forEach(child=>{
        child.addEventListener("click", (checkGameOver)=>{
            console.log(child);
            if(child.textContent==""){
                child.textContent=currentPlayer;
                if(currentPlayer==X_Text){
                    currentPlayer=O_Text;
                }else{
                    currentPlayer=X_Text;
                }
                this.checkGameOver(); 
            }
        })
    })


    function restartButton(){
        bigBoxEvent.forEach(child =>{
            child.textContent=""
        })
    }


    function checkGameOver(){
        let isfull=true;
        bigBoxEvent.forEach(child=>{
            console.log("hi")
            if(child.textContent==""){
                isfull=false;
            }
        })
        if(isfull){
            alert("Game Over");
        }
    }


