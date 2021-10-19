import React from 'react';
import { Component } from 'react';
//também poderia importar da seguinte forma: import React, { Component } from 'react';

//const BemVindo = () => <h2>Bem-Vindo(a)</h2>
/*const BemVindo = () => {
    return(
        <div>
            <h2>Bem-Vindo(a)</h2>
        </div>
    );
}*/
/*const BemVindo = (props) => {
    return(
        <div>
            <h2>Bem-Vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} Anos</h3>
        </div>
    );
}*/
/*const Equipe = (props) => {
    return(
        <div>
            <Sobre nome = {props.nome} cargo = {props.cargo} idade = {props.idade}/>
            <Social fb={props.facebook}/>
            <hr/>
        </div>
    );
}
const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}
const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>Youtube </a>
        </div>
    );
}*/
/*class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social/>
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá, sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
            </div>
        );
    }
}
const Social = () =>{
    return(
        <div>
            <a>Facebook </a>
            <a>LinkedIn </a>
        </div>
    );
}*/


/*function App(){
    return (
        <div>
            <h1>Olá Mundo</h1>
            <BemVindo nome = "Mysael" idade = "24"/>
            <BemVindo nome = "Amanda" idade = "18"/>
        </div>
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome = "Mysael" cargo = "Programador" idade = "29" facebook="http://google.com.br"/>
            <Equipe nome = "Lucas" cargo = "Designer" idade = "19" facebook="http://google.com.br"/>
            <Equipe nome = "Amanda" cargo = "Front-End" idade = "19" facebook="http://google.com.br"/>
        </div>
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Mysael" cargo="Programador" idade="24"/>
            <Equipe nome="Lucas" cargo="Designer" idade="20"/>
            <Equipe nome="Amanda" cargo="Advogada" idade="21"/>
        </div>
    );
}*/

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            nome: "Mysael",
            contador: 0
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador +=1;
        state.nome = "José";
        this.setState(state);
    }
    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert("Opa, chegou a zero");
            return; // caso não coloque o return, ele continuará diminuindo.
        }

        state.contador-=1;
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>Contador</h1>
                {this.state.nome}
                <h3>
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default App;