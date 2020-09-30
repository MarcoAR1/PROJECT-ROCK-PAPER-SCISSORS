let counterGame = [player1=0,player2=0];
function SelRock() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++;document.getElementById("PokemonMatchN").src = "imagen/HojaHitR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/FuegoL.png"}
    if (0==numero) {document.getElementById("PokemonMatchN").src = "imagen/FuegoR.png";document.getElementById("PokemonMatchP").src = "imagen/FuegoL.png"}
    if (0>numero) {counterGame[1]++;document.getElementById("PokemonMatchN").src = "imagen/AguaR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/FuegoHitL.png"}
    }

    if (counterGame[0]>=3) {document.getElementById("HeartN2").src="imagen/CorazonRoto.png";
    document.getElementById("HeartN1").src="imagen/CorazonVacio.png";counterGame[0]="D";counterGame[1]="L"}
    else if (counterGame[1]>=3) {document.getElementById("HeartP2").src="imagen/CorazonRoto.png";
    document.getElementById("HeartP1").src="imagen/CorazonVacio.png";counterGame[1]="D";counterGame[0]="L";document.getElementById("PokemonMatchN").src = "imagen/AguaR.png"};
    alCounter();
};
function SelPaper() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

        if (counterGame[0]<3) { if (0<numero) {counterGame[0]++;document.getElementById("PokemonMatchN").src = "imagen/AguaHitR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/HojaL.png"}
                if (0==numero) {document.getElementById("PokemonMatchN").src = "imagen/HojaR.png";document.getElementById("PokemonMatchP").src = "imagen/HojaL.png"}
                if (0>numero) {counterGame[1]++;document.getElementById("PokemonMatchN").src = "imagen/FuegoR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/HojaHitL.png"}
                              }
        if (counterGame[0]>=3) {
            document.getElementById("HeartN2").src="imagen/CorazonRoto.png";
            document.getElementById("HeartN1").src="imagen/CorazonVacio.png";counterGame[0]="D";counterGame[1]="L"}
        else if (counterGame[1]>=3) {
            document.getElementById("HeartP2").src="imagen/CorazonRoto.png";
            document.getElementById("HeartP1").src="imagen/CorazonVacio.png";counterGame[1]="D";counterGame[0]="L";document.getElementById("PokemonMatchN").src = "imagen/FuegoR.png"};
            alCounter();
};
function SelScissor() {
    let numero=0;
    if (numero<=0) { numero = Math.floor(Math.random() * (2 - -1)) + -1}
    else {numero = Math.floor(Math.random() * (2 - -1)) + -1};

    if (counterGame[0]<3) { if (0<numero) {counterGame[0]++;document.getElementById("PokemonMatchN").src = "imagen/FuegoHitR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/AguaL.png"}
                            if (0==numero) {document.getElementById("PokemonMatchN").src = "imagen/AguaR.png";document.getElementById("PokemonMatchP").src = "imagen/AguaL.png"}
                            if (0>numero) {counterGame[1]++;document.getElementById("PokemonMatchN").src = "imagen/HojaR.png";Gamecounter();document.getElementById("PokemonMatchP").src = "imagen/AguaHitL.png"}
                            }

    if (counterGame[0]>=3) {document.getElementById("HeartN2").src="imagen/CorazonRoto.png";
    document.getElementById("HeartN1").src="imagen/CorazonVacio.png";counterGame[0]="D";counterGame[1]="L"}
    else if (counterGame[1]>=3) {document.getElementById("HeartP2").src="imagen/CorazonRoto.png";
    document.getElementById("HeartP1").src="imagen/CorazonVacio.png";counterGame[1]="D";counterGame[0]="L";document.getElementById("PokemonMatchN").src = "imagen/HojaR.png"};
    alCounter();
};
function alCounter() {
    document.getElementById("BattleBegins").src = "imagen/NextRound.png";
    if (counterGame[0]=="L") {
        document.getElementById("BattleBegins").src = "imagen/YouLose.png";
        document.getElementById("ResetGame0").src = "imagen/Reset.png";
    }
    else if (counterGame[0]=="D") {
        document.getElementById("BattleBegins").src = "imagen/YouWin.png";
        document.getElementById("ResetGame0").src = "imagen/Reset.png";
    };
}
function Gamecounter() {
    if (counterGame[0]==1) {
        document.getElementById("HeartN0").src="imagen/CorazonRoto.png";}
    else if (counterGame[0]==2) {
        document.getElementById("HeartN1").src="imagen/CorazonRoto.png";
        document.getElementById("HeartN0").src="imagen/CorazonVacio.png";};
    if (counterGame[1]==1) {
        document.getElementById("HeartP0").src="imagen/CorazonRoto.png";}
    else if (counterGame[1]==2) {
        document.getElementById("HeartP1").src="imagen/CorazonRoto.png";
        document.getElementById("HeartP0").src="imagen/CorazonVacio.png";}
};
function gameReset () { 
    if (counterGame[0]="D"|"L") {counterGame[0]=0};
    if (counterGame[1]="D"|"L") {counterGame[1]=0};
    if (counterGame[0]==0) {
        document.getElementById("HeartP0").src="imagen/Corazon.png";
        document.getElementById("HeartP1").src="imagen/Corazon.png";
        document.getElementById("HeartP2").src="imagen/Corazon.png";
        document.getElementById("HeartN0").src="imagen/Corazon.png";
        document.getElementById("HeartN1").src="imagen/Corazon.png";
        document.getElementById("HeartN2").src="imagen/Corazon.png";
        document.getElementById("BattleBegins").src = "imagen/TheBattleBegins.png";
        document.getElementById("ResetGame0").src = "";
    }
}
document.getElementById("Rock").onclick = SelRock
document.getElementById("Paper").onclick = SelPaper
document.getElementById("Scissor").onclick = SelScissor
document.getElementById("ResetGame0").onclick = gameReset
