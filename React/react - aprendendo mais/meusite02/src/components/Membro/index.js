import React, {Component} from 'react';




class Membro extends Component{

    /*1º
    constructor(props){
        super(props);
        this.state ={
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
        this.setState({nome: nome})
    }

    render(){
        return(
            <div>
                <h2>Bem Vindo(a){this.state.nome}</h2>
                <button onClick={()=> this.entrar("Mysael")}>Entrar como Mysael</button>
                <button onClick={()=>this.setState({nome: ""})}>Sair</button>
            </div>
        );
    };*/

    constructor(props){
        super(props);
        this.state ={
            status: false
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    
    entrar(){
        this.setState({status: true});
    }
    sair(){
            this.setState({status: false});
    }

    render() {
        return (
            <div>
                {this.state.status ?
                    <div>
                        <h2>Bem Vindo ao sistema</h2>
                        <button onClick={this.sair}>Sair do Sistema</button>
                    </div> :
                    <div>
                        <h2>Olá Visitante, faça o Login!</h2>
                        <button onClick={this.entrar}>Entrar no sistema</button>
                    </div>
                }
            </div>
        );
    }


}

export default Membro;