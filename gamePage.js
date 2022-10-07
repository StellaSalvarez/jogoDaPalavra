
var jogador1 = localStorage.getItem("jogador1");
var jogador2 = localStorage.getItem("jogador2");

var jogador1pontos = 0;
var jogador2pontos = 0;

document.getElementById("nomeJogador1").innerHTML = jogador1 + ":";
document.getElementById("nomeJogador2").innerHTML = jogador2 + ":";

document.getElementById("jogador1pontos").innerHTML = jogador1pontos;
document.getElementById("jogador2pontos").innerHTML = jogador2pontos;

document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador1;
document.getElementById("resposta").innerHTML = "Turno de resposta - " + jogador2;

function enviarPalavra(){
    getWord = document.getElementById("palavraInput").value;
    word = getWord.toLowerCase();

    charAt1 = word.charAt(1);
    lengthDivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide2);
    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);

    removeCharAt1 = word.replace(charAt1,"_");
    removeCharAt2 = removeCharAt1.replace(charAt2,"_");
    removeCharAt3 = removeCharAt2.replace(charAt3,"_");

    questionWord = "<h4 id='wordDisplayQuestion'>P."+ removeCharAt3 +"</h4>";
    inputBox = "<br> resposta: <input type='text' id='inputResposta'>";
    checkBtn = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = questionWord + inputBox + checkBtn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("palavraInput").value = "";
}
var turnoPergunta = "player1";
var turnoResposta = "player2";

function check(){
    getAnswer = document.getElementById("inputResposta").value;
    Resposta = getAnswer.toLowerCase();
    if (Resposta == word){
        if(turnoResposta == "player1"){
            jogador1pontos = jogador1pontos + 1;
            document.getElementById("jogador1pontos").innerHTML = jogador1pontos;
        }
        else{
            jogador2pontos = jogador2pontos + 1;
            document.getElementById("jogador2pontos").innerHTML = jogador2pontos;
        }
    }
    else{
        alert("Você errou. Boa sorte na próxima vez!")
    }

    if(turnoPergunta == "player1"){
        turnoPergunta = "player2";
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador2;

    }
    else{
        turnoPergunta = "player1";
        document.getElementById("pergunta").innerHTML = "Turno de pergunta - " + jogador1;  
    }
    if(turnoResposta == "player1"){
        turnoResposta = "player2";
        document.getElementById("resposta").innerHTML = "Turno de resposta - " + jogador2; 
    }
    else{
        turnoResposta = "player1";
        document.getElementById("resposta").innerHTML = "Turno de resposta - " + jogador1;  
    }
    document.getElementById("output").innerHTML = "";
}