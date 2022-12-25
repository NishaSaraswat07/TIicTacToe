
let currentPlayer = "O";
let cellElements = $(".gameBoard .cell");
let player1 = $(".player-Turn .player1");
let player2 = $(".player-Turn .player2");
let result = $(".results");
let restart = $(".results button");
let resultText =  $("#resultText");
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
for (let i = 0; i < cellElements.length; i++) {
    $(cellElements[i]).on("click", function () {
        $(this).addClass("disable");
        $(this).addClass(currentPlayer);
        $(this).text(currentPlayer);
        if (checkWinner(currentPlayer)) {
            //console.log(currentPlayer + " is winner");
            result.removeClass("inactive");
            resultText.text(currentPlayer + " is the WINNER");
        } else if (isDraw()) {
            //console.log("Draw!");
            result.removeClass("inactive");
            resultText.text("Draw!");
        }
        playerTurn();
        swapPlayer();
    })
}
const playerTurn = () => {
    currentPlayer = (currentPlayer === "X" ? "O" : "X");

}
const swapPlayer = () => {
    if (currentPlayer === "X") {
        player2.addClass("playerTurn");
        player1.removeClass("playerTurn");
        player2.text("X's Turn");
        player1.text("O");
    } else {
        player1.addClass("playerTurn");
        player2.removeClass("playerTurn");
        player2.text("X");
        player1.text("O's Turn");
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

restart.on("click",function(){
    location.reload();
})


