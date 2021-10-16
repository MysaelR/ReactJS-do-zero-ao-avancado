const pessoa = {
    nome: "Mysael",
    sobrenome: "Ribeiro",
    idade: 24,
    cargo: "Desenvolvedor"
};


//Desconstrução de objeto
//Aqui estou pegando do objeto pessoa, o elemento "nome", e definindo esse nome a uma variavel "nome". Logo, quando eu chamar "nome", será retornado "Mysael"
let {nome} = pessoa;
//Caso eu queira que o nome do atributo seja diferente, coloco dois pontos(:) seguido do nome do atributo, que no exemplo abaixo será "segundoNome" ao invez de "sobrenome"
let {sobrenome:segundoNome} = pessoa;
let {idade, cargo} = pessoa;


let nomes = ['Mysael', 'Ribeiro', 24];
//let [ nome, sobrenome, idade] = nomes;


//Criei uma variavel chamada ultimoNome e atribui a ela o valor contido na posição 1 do array nomes
let { 1:ultimoNome } = nomes;
let { 0: primeiroNome, 2:anos} = nomes;

//spread operator

let primeiros = [1,2,3];
let numeros = [...primeiros,4,5,6]; //caso não usasse o spread operator (...), ficaria array(3), 4, 5, 6. ao invez dos valores que estão no array.

let pessoa1={
    nome1: "Eu",
    idade1: 10,
    cargo1: "Teste"
};
let pessoa2={
    ...pessoa,
    anoAtual:2050,
    cidade: "Campo Grande"
};

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: "programador",
        status: 1,
        codigo: '164434546'
    };
    return novosDados;
}

console.log(cadastroPessoa({nome: "Mysael", sobrenome: "Ribeiro", anoInicio: 2045}));

//rest operator 
function myList(...names){
    console.log(names);
}
myList("Mysael", "João", "Maria");

function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios);
}
let usuarios = ["Matheus", "João"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");

const lista = [1,2,3,4,5,6];

//map vai percorrer a lista posição por posição
const novaLista = lista.map(function(item){
    return item * 5
});

console.log(novaLista);

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});
console.log(soma);

const find = lista.find(function(item){
    return item === 6;
});
console.log(find);

//funções anonimas
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo)=>{
        let soma = total + proximo;
        return soma;
    });
    //let total = numeros.reduce((total,proximo) => total + proximo);
    console.log(total);
}
adicionar(1,2,3,4,5);

//includes, endsWith, startsWith

let nomes3 = ["Mysael", "João", "Roberto"];

//O Include vai verificar se "Mysael" existe na lista, e retornar um Booleano (true ou false)
console.log(nomes3.includes("Mysael"));

if(nomes3.includes("Mysael")){
    console.log("Mysael está na lista");
}else{
    console.log("Mysael não está na lista.");
}

let nome3 = "Mysael";
//O endsWith vai retortar True, também pode ser comparado valores como "l", "ael", "sael", etc.
console.log(nome3.endsWith("el"));
//O startsWith vai retornar False, também pode ser comparado valores como "M", "My", etc.
console.log(nome3.startsWith("Myz"));
//O some vai procurar se existe algum "Mysael" dentro da lista e vai retornar True
console.log(nomes3.some(busca => busca === "Mysael"));
//O some vai procurar se existe algum "Vinicius" dentro da lista e vai retornar False
console.log(nomes3.some(busca => busca === "Vinicius"));

let nomes4 = [
    {nome: "Matheus", idade: 18},
    {nome: "Maria", idade: 25},
    {nome: "Henrique", idade: 20}
];
//O every vai buscar se todos os elementos ou objetos dentro da lista atendem as condições. e vai retornar um Booleano
console.log(nomes4.every(busca => busca.idade>=18));