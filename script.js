
/*let cp ="X"//current player
 
let c1= document.getElementById('cell1')
let c2= document.getElementById('cell2')
let c3= document.getElementById('cell3')
let c4= document.getElementById('cell4')
let c5= document.getElementById('cell5')
let c6= document.getElementById('cell6')
let c7= document.getElementById('cell7')
let c8= document.getElementById('cell8')
let c9= document.getElementById('cell9')



function cell1()
{
    let c=document.getElementById("cell1")
    write()
    checkWin()
}
function cell2()
{
    let c=document.getElementById("cell2")
    write()
    checkWin()
}
function cell3()
{
    let c=document.getElementById("cell3")
    write()
    checkWin()
}
function cell4()
{
    let c=document.getElementById("cell4")
    write()
    checkWin()
}
function cell5()
{
    let c=document.getElementById("cell5")
    write()
    checkWin()
}
function cell6()
{
    let c=document.getElementById("cell6")
    write()
    checkWin()
}
function cell7()
{
    let c=document.getElementById("cell7")
    write()
    checkWin()
}
function cell8()
{
    let c=document.getElementById("cell8")
    write()
   checkWin()
}
function cell9()
{
    let c=document.getElementById("cell9")
   write()
   checkWin()
}


function checkWin(){
    if(c1.innerHTML=cp && c2.innerHTML==cp && c3.innerHTML==cp){
        let r = document.getElementById('result')
        r.innerHTML=cp+"is winner"
       }
       else if(c4.innerHTML==cp && c5.innerHTML==cp&& c6.innerHTML==cp){
        let r = document.getElementById('result')
        r.innerHTML=cp+"is winner" 
       }
       else if(c7.innerHTML==cp && c8.innerHTML==cp&& c9.innerHTML==cp){
        let r = document.getElementById('result')
        r.innerHTML=cp+"is winner" 
       }
       else if(c1.innerHTML==cp && c4.innerHTML==cp&& c7.innerHTML==cp){
           let r = document.getElementById('result')
           r.innerHTML=cp+"is winner" 
          }
          else if(c2.innerHTML==cp && c5.innerHTML==cp&& c8.innerHTML==cp){
            let r = document.getElementById('result')
            r.innerHTML=cp+"is winner" 
           }
           else if(c3.innerHTML==cp && c6.innerHTML==cp&& c9.innerHTML==cp){
            let r = document.getElementById('result')
            r.innerHTML=cp+"is winner" 
           }

}
function write()
{
    if(cp=="0")
        {
          c.innerHTML="X"
          cp="X"
        }else{
          c.innerHTML="0"
          cp="0"
        }   
}

function restart()
{
    window.location="index.html"
}
*/

let currentPlayer = "X"; // The player who will make the next move
let gameBoard = ["", "", "", "", "", "", "", "", ""]; // The state of the board
let gameOver = false; // To check if the game is over

// Handle cell click
function cellClick(index) {
    if (gameBoard[index] === "" && !gameOver) {
        gameBoard[index] = currentPlayer;
        document.getElementById(`cell${index + 1}`).innerHTML = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === "X") ? "O" : "X"; // Switch player
    }
}

// Check for winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal 1
        [2, 4, 6]  // Diagonal 2
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById("result").innerText = `${gameBoard[a]} wins!`;
            gameOver = true; // End the game
            return;
        }
    }

    if (!gameBoard.includes("")) {
        document.getElementById("result").innerText = "It's a draw!";
        gameOver = true; // End the game if it's a draw
    }
}

// Restart the game
function restart() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    currentPlayer = "X";
    document.getElementById("result").innerText = "";
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cell${i + 1}`).innerText = "";
    }
}
