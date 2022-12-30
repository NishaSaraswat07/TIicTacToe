
let currentPlayer = "O";
let cellElements = $(".gameBoard .cell");
let player1 = $(".player-Turn .player1");
let player2 = $(".player-Turn .player2");
let result = $(".results");
let replay = $(".results button");
let restart = $("#restart");
let resultText =  $("#resultText");
let counterO = 0;
let counterX = 0;
const WINNER = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
]

const startGame=()=>{
for (let i = 0; i < cellElements.length; i++) {
    $(cellElements[i]).on("click", function () {
        $(this).addClass("disable");
        $(this).addClass(currentPlayer);
        $(this).text(currentPlayer);
        
        if (checkWinner(currentPlayer)) {
            //console.log(currentPlayer + " is winner");
            result.removeClass("inactive");
            resultText.text(currentPlayer + " is the WINNER");
            if(currentPlayer=="O"){
                ++counterO;
                $(".winsO").text(' '+ counterO);
                $(".looseX").text(' '+ counterO);
            }else if(currentPlayer == "X"){
                counterX++;
                $(".winsX").text(' '+ counterX);
                $(".looseO").text(' '+ counterX);
        
            }
        } else if (isDraw()) {
            //console.log("Draw!");
            result.removeClass("inactive");
            resultText.text("Draw!");
           
        }
        playerTurn();
        swapPlayer();
    })
}
}
startGame();
const playerTurn = () => {
    
    currentPlayer = (currentPlayer === "X" ? "O" : "X");

}
const swapPlayer = () => {
    if (currentPlayer === "X") {
        player2.addClass("playerTurn");
        player1.removeClass("playerTurn");
    } else {
        player1.addClass("playerTurn");
        player2.removeClass("playerTurn");
    }
}
const checkWinner = (currentPlayer) => {
    return WINNER.some(condition => {
        return condition.every(index => {
            return cellElements[index].classList.contains(currentPlayer);
        })
    });
}
const isDraw = () => {
    return [...cellElements].every(cell => {
        return cell.classList.contains('X') || cell.classList.contains('O')
    })
}
replay.on("click",function(){
        result.addClass("inactive");
        cellElements.removeClass("disable");
        cellElements.removeClass("X");
        cellElements.removeClass("O");
        cellElements.text(" ");
})
restart.on("click",function(){
    location.reload();
})


