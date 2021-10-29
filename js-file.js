let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", buttonClicked);
});

let roundcounter = 0;
let scoreNumberComp = 0;
let scoreNumberPlayer = 0;

function buttonClicked(e) {

    /*Displays player's pick*/
    let playerPick = document.querySelector(".playerPick");
    playerPick.innerHTML = `Player: ${e.target.id}`;

    /*Displays computer's pick*/
    let compDict = ["Rock", "Paper", "Scissors"];
    function compRPS (max) {
        let num = Math.floor(Math.random() *max);
        return num; 
    };
    let compNum = compRPS(3);
    let compPick = document.querySelector(".compPick");
    compPick.innerHTML = `Computer: ${compDict[compNum]}`;

    /*Decides who wins*/
    let playDict = {"Rock": 0, "Paper": 1, "Scissors": 2};
    let decider = [
        ["Tie!", "Player wins!", "Computer wins!"], 
        ["Computer wins!", "Tie!", "Player wins!"], 
        ["Player wins!", "Computer wins!", "Tie!"]];
    let result = decider[compNum][playDict[e.target.id]];
    let whowins = document.querySelector(".whowins");
    whowins.innerHTML = `${result}`;

    /*Updates scores*/
    if (result == "Computer wins!") {
        scoreNumberComp++;
    }
    else if (result == "Player wins!"){
        scoreNumberPlayer++;
    } 
    let compScore = document.querySelector(".compScore");
    compScore.innerHTML = `Score: ${scoreNumberComp}`;
    let playerScore = document.querySelector(".playerScore");
    playerScore.innerHTML = `Score: ${scoreNumberPlayer}`;


    if (scoreNumberComp == 5 || scoreNumberPlayer == 5) {
        if (scoreNumberComp == 5) {
            whowins.innerHTML = "You lost last round:(";
        } 
        else if (scoreNumberPlayer == 5) {
            whowins.innerHTML = "You won last round, champ;)";
        }
        roundcounter++;
        let round = document.querySelector(".round");
        round.innerHTML = `Round: ${roundcounter}`;
        scoreNumberPlayer = 0;
        scoreNumberComp = 0;
        playerPick.innerHTML = "Player: ";
        compPick.innerHTML = "Computer: ";
    } 
}
