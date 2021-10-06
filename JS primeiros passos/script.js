function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto === null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo, ' + texto;
    }
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome: ');

    area.innerHTML = nome + " " + texto;
}

// while = enquanto
x = 0;

while(x < 10){
    document.write("<br> O valor de X: " + x);
    x++;
}

document.write("<br><br><br> O X esta valendo: " + x + "<br><br>");

// For = para
for(a = 0; a<x; a++){
    document.write("<br>O Valor do A: " + a);
}


document.write("<br> Escolha seu pedido: ");
document.write("<br> 0 - Sorvete / 1 - Suco <br>");
document.write("<br> 2 - Coca-Cola / 3 - Água Gelada <br><br>")

function pedir(){
    //Switch

    y = prompt("O que deseja Pedir? ");

    switch(y){
        case "0":
            alert("Voce pediu Sorvete");
            break;
        case "1":
            alert("Voce pediu um suco");
            break;
        case "2":
            alert("Voce pediu uma coca");
            break;
        case "3":
            alert("Voce pediu uma agua gelada");
            break;
        default:
            alert("Ops nao temos essa opcao");
            break;
    }
}

function acao(){
    document.write("Executanto...<br>")
}

//Executa de tempo em tempo!



//setInterval(acao, 1000);
// var timer = setInterval(acao, 1000);
// clearInterval(timer);

//setTimeout(acao, 5000);