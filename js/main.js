
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigada por clicar");
}

function redirecionar(){
    window.open("https://www.globo.com/");
    //window.location.href = "https://www.globo.com/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    elemento.innerHTML = "Obrigada por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1,n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
validaIdade(idade)
console.log(validar);

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/
/*
var d = new Date();
alert(d.getDay)
alert(d.getMonth)
alert(d.getMinutes)
alert(d.getday)
*/


/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/





/*
var idade = prompt("Qual sua idade?");
 if (idade >= 18){
     alert("maior de idade");
 }else{
     alert("menor de idade");
 };
*/

/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(futa.cor)
*/


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista.length);
//console.log(lista.toString);
//console.log(lista.lengthjoin(" - "));





//var nome = "Elaine Moreira";
//var n1 = 5;
//var n2 = 3
//var frase = "Eu amo minha família";
//alert("Bem vindo " + nome);
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(toLowerCase()); //letra minuscula
//console.log(upperCase()); letra maiuscula