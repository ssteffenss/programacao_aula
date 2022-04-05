function jogar(value) {
    var qtdjogos = "jogos";
    var vitorias = "vitorias";
    var derrotas = 'derrotas';
    var total =  +localStorage.getItem(qtdjogos) + 1;
    localStorage.setItem(qtdjogos,total);

    var escolhaPC = Math.floor(Math.random() * (3 - 1) +1);

    if (escolhaPC === value) {
        alert('empate');
    }
    total();
}

function total() {
    var qtdjogos = "jogos";
    var total = localStorage.getItem(qtdjogos);
    var inputTotal = document.getElementById("total");
    inputTotal = total;
}