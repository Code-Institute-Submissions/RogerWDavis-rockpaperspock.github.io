
//variable for presenting text to user
let playerSpeak = document.getElementById("playerout");
let maschineSpeak = document.getElementById("maschineout");
let resultSpeak = document.getElementById("resultout");

//variables for capturing button choices
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let lizardBtn = document.getElementById("lizard");
let spockBtn = document.getElementById("spock");

//variables for buttonClick functions
let result;
let player;
let maschine;
let maschineWins=0;
let playerWins=0;

//replace name function
document.getElementById("nameBtn").onclick = (event=>{
    document.getElementById("playerout").textContent=document.getElementById("name").value+":";
    name=document.getElementById("playerout").textContent;
});



//buttonclick function 
const buttonClick=(id=>{
    let myId=id;
    player = myId; 
    console.log(myId);
    maschineTurn();
    console.log(maschine);
    checkWinner();
    result=checkWinner();
    console.log(result);
    playerSpeak.textContent = name + player;
    maschineSpeak.textContent = "Maschine:" + maschine;
    resultSpeak.textContent = "Result:" + result;
    gWin();

});
 


//maschineTurn function to automate maschine action using Pattern Matching
function maschineTurn() {
    let randNum = Math.floor(Math.random() * 5) + 1;
    switch (randNum) {
        case 1:
            maschine = "rock";
            break;

        case 2:
            maschine = "paper";
            break;

        case 3:
            maschine = "scissors";
            break;

        case 4:
            maschine = "lizard";
            break;

        case 5:
            maschine = "spock";
            break;


    }
}

//Check Winner Function
function checkWinner(){
    if(player == maschine){
        return "Draw!";
    }
    else if(player == "rock"){
        return (maschine == "paper")?"You win!":"You lose!"
    }
    else if(player == "rock"){
        return (maschine == "lizard")?"You win!":"You lose!"
    }
    else if(player == "paper"){
        return (maschine == "rock")?"You win!":"You lose!"
    }
    else if(player == "paper"){
        return (maschine == "spock")?"You win!":"You lose!"
    }
    else if(player == "scissors"){
        return (maschine == "paper")?"You win!":"You lose!"
    }
    else if(player == "scissors"){
        return (maschine == "lizard")?"You win!":"You lose!"
    }
    else if(player == "lizard"){
        return (maschine == "paper")?"You win!":"You lose!"
    }
    else if(player == "lizard"){
        return (maschine == "spock")?"You win!":"You lose!"
    }
    else if(player == "spock"){
        return (maschine == "rock")?"You win!":"You lose!"
    }
    else if(player == "spock"){
        return (maschine == "scissors")?"You win!":"You lose!"
    }
}; 

//Win Count
function gWin(){
    if(result=="You win!"){
        playerWins++;
        document.getElementById("pwin").textContent=playerWins;
    }else if(result=="You lose!"){
        maschineWins++;
        document.getElementById("mwin").textContent=maschineWins;
    };
};
    
