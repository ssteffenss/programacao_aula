
function calcularImc(){
    var nome = document.getElementById("enome").value;    
    var peso = document.getElementById("epeso").value;
    var altura = document.getElementById("ealtura").value;
    var resultado = document.getElementById("eresultado");
     
    // imc
    var imc = peso / (altura * altura);
    
    
    if(imc < 17)
    {
        resultado.value = nome +  ", você está muito abaixo do peso";
    } 
    else if(imc >17 && imc <= 18.49)
    {
        resultado.value = nome +  ", você está abaixo do peso";
    }
    else if(imc >25 && imc <= 30)
    {
        resultado.value = nome  +  ", você está peso normal";
    }
    else if(imc >30 && imc <= 35)
    {
        resultado.value = nome  +  ", você está acima do peso";
    }
    else if(imc >35 && imc <= 40)
    {
        resultado.value = nome  +  ", você está obesidade I";
    }
    else if(imc >40 && imc <= 50)
    {
        resultado.value = nome +  ", você está com obesidade tipo II";
    }
}

     
