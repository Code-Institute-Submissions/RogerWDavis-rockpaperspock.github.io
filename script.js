

//variable for presenting text to user
let playerSpeak = document.getElementById("playerout");
let player2Speak = document.getElementById("player2out");
let maschineSpeak = document.getElementById("maschineout");
let resultSpeak = document.getElementById("resultout");

//variables for buttonClick functions
let player2;
let result;
let player;
let maschine;
let maschineWins=0;
let playerWins=0;
let player2Wins=0;


//get single player screen
document.getElementById("containerbtn1").onclick = (event=>{
    function showContainer2(){
        let a = document.getElementById("container1");
        let b = document.getElementById("container2");
        let c = document.getElementById("player2div");
        let d = document.getElementById("maschinediv");
        a.style.display="none";
        b.style.display="grid";
        c.hidden=true;
        d.hidden=false;
    }
    showContainer2();
    singlePlayer();
});


//get multiplayer screen
document.getElementById("containerbtn2").onclick = (event=>{
    function showContainer2(){
        let a = document.getElementById("container1");
        let b = document.getElementById("container2");
        let c = document.getElementById("player2div");
        let d = document.getElementById("maschinediv");
        a.style.display="none";
        b.style.display="grid";
        c.hidden=false;
        d.hidden=true;
    }
    showContainer2();
    multiPlayer();
});

//get main screen
document.getElementById("land").onclick = (event=>{
    function showContainer1(){
        let a = document.getElementById("container1");
        let b = document.getElementById("container2");
        let c = document.getElementById("player2div");
        let d = document.getElementById("maschinediv");
        a.style.display="grid";
        b.style.display="none";
        c.hidden=true;
        d.hidden=true;
    }
    showContainer1();
});


//replace name function player 1
document.getElementById("nameBtn").onclick = (event=>{
    document.getElementById("playerout").textContent=document.getElementById("name").value+":";
    name=document.getElementById("playerout").textContent;
});

//replace name function player 2
document.getElementById("name2Btn").onclick = (event=>{
    document.getElementById("player2out").textContent=document.getElementById("name2").value+":";
    name=document.getElementById("player2out").textContent;
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



function singlePlayer(){

        console.log("singleMode");
        document.getElementById("rock").addEventListener("click",(id)=>{
            player="rock";
            playerSpeak.textContent = name + player;
            maschineTurn();
            checkWinner();
            result=checkWinner();
            maschineSpeak.textContent = "Maschine:" + maschine;
            resultSpeak.textContent = "Result:" + result;
            gWin();
        });
        document.getElementById("paper").addEventListener("click",(id)=>{
            player="paper";
            playerSpeak.textContent = name + player;
            maschineTurn();
            checkWinner();
            result=checkWinner();
            maschineSpeak.textContent = "Maschine:" + maschine;
            resultSpeak.textContent = "Result:" + result;
            gWin();
        });
        document.getElementById("scissors").addEventListener("click",(id)=>{
            player="scissors";
            playerSpeak.textContent = name + player;
            maschineTurn();
            checkWinner();
            result=checkWinner();
            maschineSpeak.textContent = "Maschine:" + maschine;
            resultSpeak.textContent = "Result:" + result;
            gWin();
        });
        document.getElementById("lizard").addEventListener("click",(id)=>{
            player="lizard";
            playerSpeak.textContent = name + player;
            maschineTurn();
            checkWinner();
            result=checkWinner();
            maschineSpeak.textContent = "Maschine:" + maschine;
            resultSpeak.textContent = "Result:" + result;
            gWin();
        });
        document.getElementById("spock").addEventListener("click",(id)=>{
            player="spock";
            playerSpeak.textContent = name + player;
            maschineTurn();
            checkWinner();
            result=checkWinner();
            maschineSpeak.textContent = "Maschine:" + maschine;
            resultSpeak.textContent = "Result:" + result;
            gWin();
        });
}


function multiPlayer(){
    console.log("multi");
        document.getElementById("rock").addEventListener("click",(id)=>{
            player="rock";
            playerSpeak.textContent = name + player;
            resultSpeak.textContent = "Awaiting player 2";
            player2Move();
        });
        document.getElementById("paper").addEventListener("click",(id)=>{
            player="paper";
            playerSpeak.textContent = name + player;
            resultSpeak.textContent = "Awaiting player 2";
            player2Move();
        });
        document.getElementById("scissors").addEventListener("click",(id)=>{
            player="scissors";
            playerSpeak.textContent = name + player;
            resultSpeak.textContent = "Awaiting player 2";
            player2Move();
        });
        document.getElementById("lizard").addEventListener("click",(id)=>{
            player="lizard";
            playerSpeak.textContent = name + player;
            resultSpeak.textContent = "Awaiting player 2";
            player2Move();
        });
        document.getElementById("spock").addEventListener("click",(id)=>{
            player="spock";
            playerSpeak.textContent = name + player;
            resultSpeak.textContent = "Awaiting player 2";
            player2Move();
        });
    }



function player2Move(){

    document.getElementById("rock2").addEventListener("click",(id)=>{
        player2="rock";
        player2Speak.textContent = name + player2;
        checkWinner2();
        result=checkWinner2();
        resultSpeak.textContent = "Result:" + result;
    });
    document.getElementById("paper2").addEventListener("click",(id)=>{
        player2="paper";
        player2Speak.textContent = name + player2;
        checkWinner2();
        result=checkWinner2();
        resultSpeak.textContent = "Result:" + result;
    });
    document.getElementById("scissors2").addEventListener("click",(id)=>{
        player2="scissors";
        player2Speak.textContent = name + player2;
        result=checkWinner2();
        resultSpeak.textContent = "Result:" + result;
    });
    document.getElementById("lizard2").addEventListener("click",(id)=>{
        player2="lizard";
        player2Speak.textContent = name + player2;
        checkWinner2();
        result=checkWinner2();
        resultSpeak.textContent = "Result:" + result;
    });
    document.getElementById("spock2").addEventListener("click",(id)=>{
        player2="spock";
        player2Speak.textContent = name + player2;
        checkWinner2();
        result=checkWinner2();
        resultSpeak.textContent = "Result:" + result;
    });
    gWin2();
}



function checkWinner2(){
    if(player==player2){
        return "Draw!";
    }
    else if(player=="rock" && player2=="paper"){
        return "Player 2 wins";
    }
    else if(player=="rock" && player2=="scissors"){
        return "Player 1 wins";
    }
    else if(player=="rock" && player2=="spock"){
        return "Player 2 wins";
    }
    else if(player=="rock" && player2=="lizard"){
        return "Player 1 wins";
    }
    else if(player=="paper" && player2=="rock"){
        return "Player 1 wins";
    }
    else if(player=="paper" && player2=="scissors"){
        return "Player 2 wins";
    }
    else if(player=="paper" && player2=="spock"){
        return "Player 1 wins";
    }
    else if(player=="paper" && player2=="lizard"){
        return "Player 2 wins";
    }
    else if(player=="scissors" && player2=="paper"){
        return "Player 1 wins";
    }
    else if(player=="scissors" && player2=="rock"){
        return "Player 2 wins";
    }
    else if(player=="scissors" && player2=="spock"){
        return "Player 2 wins";
    }
    else if(player=="scissors" && player2=="lizard"){
        return "Player 1 wins";
    }
    else if(player=="lizard" && player2=="paper"){
        return "Player 1 wins";
    }
    else if(player=="lizard" && player2=="scissors"){
        return "Player 2 wins";
    }
    else if(player=="lizard" && player2=="spock"){
        return "Player 1 wins";
    }
    else if(player=="lizard" && player2=="rock"){
        return "Player 2 wins";
    }
    else if(player=="spock" && player2=="paper"){
        return "Player 2 wins";
    }
    else if(player=="spock" && player2=="scissors"){
        return "Player 1 wins";
    }
    else if(player=="spock" && player2=="rock"){
        return "Player 2 wins";
    }
    else if(player=="spock" && player2=="lizard"){
        return "Player 2 wins";
    }
};


function checkWinner(){
    if(player==maschine){
        return "Draw!";
    }
    else if(player=="rock" && maschine=="paper"){
        return "You lose!";
    }
    else if(player=="rock" && maschine=="scissors"){
        return "You win!";
    }
    else if(player=="rock" && maschine=="spock"){
        return "You lose!";
    }
    else if(player=="rock" && maschine=="lizard"){
        return "You win!";
    }
    else if(player=="paper" && maschine=="rock"){
        return "You win!";
    }
    else if(player=="paper" && maschine=="scissors"){
        return "You lose!";
    }
    else if(player=="paper" && maschine=="spock"){
        return "You win!";
    }
    else if(player=="paper" && maschine=="lizard"){
        return "You lose!";
    }
    else if(player=="scissors" && maschine=="paper"){
        return "You win!";
    }
    else if(player=="scissors" && maschine=="rock"){
        return "You lose!";
    }
    else if(player=="scissors" && maschine=="spock"){
        return "You lose!";
    }
    else if(player=="scissors" && maschine=="lizard"){
        return "You win!";
    }
    else if(player=="lizard" && maschine=="paper"){
        return "You lose!";
    }
    else if(player=="lizard" && maschine=="scissors"){
        return "You win!";
    }
    else if(player=="lizard" && maschine=="spock"){
        return "You win!";
    }
    else if(player=="lizard" && maschine=="rock"){
        return "You lose!";
    }
    else if(player=="spock" && maschine=="paper"){
        return "You lose!";
    }
    else if(player=="spock" && maschine=="scissors"){
        return "You win!";
    }
    else if(player=="spock" && maschine=="rock"){
        return "You win!";
    }
    else if(player=="spock" && maschine=="lizard"){
        return "You lose!";
    }
};
    

function gWin(){
    if(result=="You win!"){
        playerWins++;
        document.getElementById("pwin").textContent=playerWins;
    }else if(result=="You lose!"){
        maschineWins++;
        document.getElementById("mwin").textContent=maschineWins;
    };
};


function gWin2(){
    if(result=="Player 1 wins"){
        playerWins++;
        document.getElementById("pwin").textContent=playerWins;
    }else if(result=="Player 2 wins"){
        player2Wins++;
        document.getElementById("p2win").textContent=player2Wins;
    };
};


// When the user clicks on the oBtn, open the modal
document.getElementById("oBtn").onclick = function() {
    let modal = document.getElementById("modal");
    modal.style.display = "block";
};


// When the user clicks on cBtn, close the modal
document.getElementById("cBtn").onclick = function() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
};



