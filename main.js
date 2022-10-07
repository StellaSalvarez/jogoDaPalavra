var player1;
var player2;

 function enviar(){
    player1 = document.getElementById("inputJogador1").value;
    player2 = document.getElementById("inputJogador2").value;

    localStorage.setItem("jogador1", player1);
    localStorage.setItem("jogador2", player2);

    window.location = "gamePage.html"
}
