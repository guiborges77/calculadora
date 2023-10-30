

//Exibe na calculadora o numero que o usuario clicar
function insert(num){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

//Limpa os numeros 
function clean(){
    document.getElementById('resultado').innerHTML = " ";
}

//Apaga o último numero digitado
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

//Realiza o calculo
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
      if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
    }
      else{
        document.getElementById('resultado').innerHTML = "Digite";

    }
}
