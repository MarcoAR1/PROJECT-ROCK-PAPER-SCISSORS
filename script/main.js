document.getElementById("Stard").onclick = myGame;
let counterGame = [player1=0,player2=0];
function myGame () { 
    let Message;
    let versus = "  ";
    if (counterGame[0]<=3) {counterGame[0]=0;counterGame[1]=0}
    else if (counterGame[0]="x.x"|";D") {counterGame[0]=0;counterGame[1]=0}
    else if (counterGame[1]=";D"|"x.x") {counterGame[0]=0;counterGame[1]=0}
    if (counterGame[0]==0) {
        document.getElementById("Heart00").src = "imagen/Corazon.png"
        document.getElementById("Heart01").src = "imagen/Corazon.png"
        document.getElementById("Heart02").src = "imagen/Corazon.png"
        document.getElementById("Heart0").src = "imagen/Corazon.png"
        document.getElementById("Heart1").src = "imagen/Corazon.png"
        document.getElementById("Heart2").src = "imagen/Corazon.png"}
    Message = "The Battle Started";
    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0]
    document.getElementById("Versus").innerHTML = versus
}
function Gamecounter() {
            if (counterGame[0]==1) {document.getElementById("Heart00").src = "imagen/CorazonRoto.png"}
            else if (counterGame[0]==2) {
                    document.getElementById("Heart01").src = "imagen/CorazonRoto.png"
                    document.getElementById("Heart00").src = "imagen/CorazonVacio.png"}
            else if (counterGame[0]==3) {
                    document.getElementById("Heart02").src = "imagen/CorazonRoto.png"
                    document.getElementById("Heart01").src = "imagen/CorazonVacio.png"}
            if (counterGame[1]==1) {
                    document.getElementById("Heart2").src = "imagen/CorazonRoto.png"}
            else if (counterGame[1]==2) {
                    document.getElementById("Heart1").src = "imagen/CorazonRoto.png"
                    document.getElementById("Heart2").src = "imagen/CorazonVacio.png"}
            else if (counterGame[1]==3) {
                    document.getElementById("Heart0").src = "imagen/CorazonRoto.png"
                    document.getElementById("Heart1").src = "imagen/CorazonVacio.png"}    
                        }

function SelRock() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point";document.getElementById("PokemonMatchN").src = "imagen/Hoja.png";
                                Gamecounter()
}
                            if (0==numero) {versus="Equal";document.getElementById("PokemonMatchN").src = "imagen/Fuego.png"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point";document.getElementById("PokemonMatchN").src = "imagen/Agua.png"; Gamecounter()
                        }
}
    if (counterGame[0]>=3) { Message = "You Win";versus = " ";counterGame[0]=";D";counterGame[1]="x.x"}
    else if (counterGame[1]>=3) { Message = "You lose";versus = " ",counterGame[1]=";D";counterGame[0]="x.x";document.getElementById("PokemonMatchN").src = "imagen/Agua.png"}
    if (counterGame[0]=="x.x") { Message = "You Lose"}
    else if (counterGame[0]==";D") { Message = "You Win"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0] + " You  " + counterGame[1]
    document.getElementById("Versus").innerHTML = versus
    document.getElementById("PokemonMatchP").src = "imagen/Fuego.png"
};
function SelPaper() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point";document.getElementById("PokemonMatchN").src = "imagen/Agua.png";Gamecounter()}
                            if (0==numero) {versus="Equal";document.getElementById("PokemonMatchN").src = "imagen/Hoja.png"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point";document.getElementById("PokemonMatchN").src = "imagen/Fuego.png";Gamecounter()}}

    if (counterGame[0]>=3) { Message = "You Win"; versus = " ";counterGame[0]=";D";counterGame[1]="x.x"}
    else if (counterGame[1]>=3) { Message = "You lose";versus = " ";counterGame[1]=";D";counterGame[0]="x.x";document.getElementById("PokemonMatchN").src = "imagen/Fuego.png"}
    if (counterGame[0]=="x.x") { Message = "You Lose"}
     else if (counterGame[0]==";D") { Message = "You Win"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0] + "  " + counterGame[1]
    document.getElementById("Versus").innerHTML = versus
    document.getElementById("PokemonMatchP").src = "imagen/Hoja.png"
};
function SelScissor() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++; versus="Win a point";document.getElementById("PokemonMatchN").src = "imagen/Fuego.png";Gamecounter()}
                            if (0==numero) {versus="Equal";document.getElementById("PokemonMatchN").src = "imagen/Agua.png"}
                            if (0>numero) {counterGame[1]++; versus="Npc Win a point";document.getElementById("PokemonMatchN").src = "imagen/Hoja.png";Gamecounter()}
}

    if (counterGame[0]>=3) { Message = "You Win"; versus = " ";counterGame[0]=";D";counterGame[1]="x.x"}
    else if (counterGame[1]>=3) { Message = "You lose"; versus = " ";counterGame[1]=";D";counterGame[0]="x.x";document.getElementById("PokemonMatchN").src = "imagen/Hoja.png"}
    if (counterGame[0]=="x.x") { Message = "You Lose"}
    else if (counterGame[1]=="x.x") { Message = "You Win"}
     else { Message = "Next Round"};

    document.getElementById("Message").innerHTML = Message
    document.getElementById("counterYou").innerHTML = counterGame[0] + "  " + counterGame[1]
    document.getElementById("Versus").innerHTML = versus
    document.getElementById("PokemonMatchP").src = "imagen/Agua.png"
};
document.getElementById("Rock").onclick = SelRock
document.getElementById("Paper").onclick = SelPaper
document.getElementById("Scissor").onclick = SelScissor