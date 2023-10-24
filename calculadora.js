let operador = '';
let numero1;
let numero2;
let resultado;

function calculadora(){

//Entrada do operador selecionado
    operador = document.querySelector('#slcoperador').value;
    //Verifica se é o operador de soma
    if (operador == '+') {
        //alert('VOCÊ ESCOLHEU A OPERAÇÃO DE SOMA!');
        somar();
    }
//Verifica se é o operador de subtração
    if (operador == '-') {
    //alert('VOCÊ ESCOLHEU A OPERAÇÃO DE SUBTRAÇÃO!');
    subtração();
    }   
//Verifica se é o operador da multiplicação
    if (operador == '*') {
    //alert('VOCÊ ESCOLHEU A OPERAÇÃO DE MUTIPLICAÇÃO!');
    multiplicação();
    }
//Verifica se é o operador de divisão
    if (operador == '/') {
    //alert('VOCÊ ESCOLHEU A OPERAÇÃO DE DIVISÃO!');
    divir();
    }


}
    
    
    //Declaração da função Somar
    function somar(){


        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        numero2= parseInt(document.querySelector('#numero2').value);  
        
        resultado = numero1 + numero2;

        document.querySelector('#resultado').innerHTML = resultado;
        
        //alert('RESULTADO:' + resultado)
    
    }

     //Declaração da função Subtração
    function subtração(){


        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        numero2= parseInt(document.querySelector('#numero2').value);  
        
        resultado = numero1 - numero2;

        document.querySelector('#resultado').innerHTML = resultado;
        
        //alert('RESULTADO:' - resultado)
    
    }

     //Declaração da função Multiplicação
    function multiplicação(){


        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        numero2= parseInt(document.querySelector('#numero2').value);  
        
        resultado = numero1 * numero2;

        document.querySelector('#resultado').innerHTML = resultado;
        
        //alert('RESULTADO:' * resultado)
    
    }

     //Declaração da função de Dividir
    function divir(){


        //Entrada de dado do número 1
        
        numero1= parseInt(document.querySelector('#numero1').value);
        numero2= parseInt(document.querySelector('#numero2').value);  
        
        resultado = numero1 / numero2;

        document.querySelector('#resultado').innerHTML = resultado;
        
        //alert('RESULTADO:' / resultado)
    
    }

    //TRATAMENTO DAS IMAGENS DOS OPERADORES
    let select = document.querySelector('#slcoperador');   
    select.addEventListener('change',function(){
        //alert('TESTE 123');

        let imgOperacao = document.querySelector('#imgOperacao');
        let op = select.options[select.selectedIndex].value;

        if(op == '+'){
            imgOperacao.setAttribute('src', 'img/adicionar.png');
        }    
    
        if(op == '-'){
            imgOperacao.setAttribute('src', 'img/subtracao.png');
        }  

        if(op == '*'){
            imgOperacao.setAttribute('src', 'img/multiplicacao.png');
        }  

        if(op == '/'){
            imgOperacao.setAttribute('src', 'img/divisao.png');
        }  
    });

    //FUNÇÃO LIMPAR FORMULÁRIO
    function limpar(){

        document.querySelector('#numero1').value = '';
        document.querySelector('#numero2').value = '';
        document.querySelector('#resultado').innerHTML   = '-';
    }

