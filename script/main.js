document.getElementById("Stard").onclick = myGame;
let counterGame = [player1=0,player2=0];
function myGame () { 
    let Message;
    let versus = "  ";
    if (counterGame[0]<=3) {counterGame[0]=0;counterGame[1]=0}
    if (counterGame[0]="x.x") {counterGame[0]=0;counterGame[1]=0}
    if (counterGame[1]=";D") {counterGame[0]=0;counterGame[1]=0}
    Message = "The Battle Started";
    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0]
    document.getElementById("Versus").innerHTML = versus
}
function SelRock() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point"}
                            if (0==numero) {versus="Equal"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point"}
}
    if (counterGame[0]>=3) { Message = "You Win";versus = " ";counterGame[1]=";D"}
    else if (counterGame[1]>=3) { Message = "You lose";versus = " ",counterGame[0]="x.x"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0]
    document.getElementById("Versus").innerHTML = versus
};
function SelPaper() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point"}
                            if (0==numero) {versus="Equal"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point"}}

    if (counterGame[0]>=3) { Message = "You Win"; versus = " ";counterGame[1]=";D"}
    else if (counterGame[1]>=3) { Message = "You lose";versus = " ";counterGame[0]="x.x"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0]
    document.getElementById("Versus").innerHTML = versus
};
function SelScissor() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point"}
                            if (0==numero) {versus="Equal"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point"}
}

    if (counterGame[0]>=3) { Message = "You Win"; versus = " ";counterGame[1]=";D"}
    else if (counterGame[1]>=3) { Message = "You lose"; versus = " ";counterGame[0]="x.x"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0]
    document.getElementById("Versus").innerHTML = versus
};

document.getElementById("Rock").onclick = SelRock
document.getElementById("Paper").onclick = SelPaper
document.getElementById("Scissor").onclick = SelScissor