
const bigBoxEvent=document.querySelectorAll("#big-box div");
// its gives us an array;
const O_Text="O";
const X_Text="X";
var currentPlayer=X_Text;


    bigBoxEvent.forEach(child=>{
        child.addEventListener("click", ()=>{
            console.log(child);
            if(child.textContent==""){
                child.textContent=currentPlayer;
                if(currentPlayer==X_Text){
                    currentPlayer=O_Text; 
                }else{
                    currentPlayer=X_Text;
                }
                this.checkGameOver(); 
                // setTimeout(this.isWin(),5000);
                this.isWin();
            }
        })
    })


    function restartButton(){
        this.currentPlayer=X_Text;
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
            setTimeout(()=>{
                alert("Game Over")
                this.restartButton();
            },500);
        }
    }

    function isWin(){ 
        const checkWin=[[bigBoxEvent[0],bigBoxEvent[4],bigBoxEvent[8]],
        [bigBoxEvent[2],bigBoxEvent[4],bigBoxEvent[6]],
        [bigBoxEvent[0],bigBoxEvent[3],bigBoxEvent[6]],
        [bigBoxEvent[1],bigBoxEvent[4],bigBoxEvent[7]],
        [bigBoxEvent[2],bigBoxEvent[5],bigBoxEvent[8]],
        [bigBoxEvent[0],bigBoxEvent[1],bigBoxEvent[2]],
        [bigBoxEvent[3],bigBoxEvent[4],bigBoxEvent[5]],
        [bigBoxEvent[6],bigBoxEvent[7],bigBoxEvent[8]]]

        checkWin.forEach(arr=>{
               let isX=arr.every(el => el.textContent==='X');
               let isO=arr.every(el => el.textContent==='O');
               setTimeout(()=>{
                   if(isX){
                       alert('Player 1 is Win');
                       return;
                   }
                   if(isO){
                       alert('Player 2 is Win');
                       return;
                   }
               },500);
        });

        }


