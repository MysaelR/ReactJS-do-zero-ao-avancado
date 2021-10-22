import React, {Component} from 'react';

class App extends Component{
  
  constructor(props){
    super(props);
    this.state={
      form:{
        nome: '',
        email: '',
        senha: '',
        sexo: ''
      }
    }
    this.dadosForm = this.dadosForm.bind(this);
    //this.trocaEmail=this.trocaEmail.bind(this);
  }

  /*trocaEmail(e){
    let valorDigitado = e.target.value;
    this.setState({email: valorDigitado});
  }*/

  dadosForm(e){
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form : form});
  }

  render(){
    return(
      <div>
        <h2>Login</h2>
        Nome:
        <input type="text" name="nome" value={this.state.form.nome} 
        onChange={this.dadosForm}/><br/>
        Email:
        <input type="email" name="email" value={this.state.form.email}
        onChange={this.dadosForm}/><br/>
        Senha:
        <input type="password" name="senha" value={this.state.form.senha}
        /*onChange={(e)=> this.setState({senha:e.target.value})}*/ onChange={this.dadosForm}/><br/>
        Sexo:
        <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.form.email}</h3>
          <h3>{this.state.form.senha}</h3>
          <h3>{this.state.form.sexo}</h3>
        </div>
      </div>
    );
  }
}

/*class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      error: ''
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(event){
    const {nome, email, senha} = this.state;

    if(nome !== '' && email !== '' && senha !== ''){
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
    }else{
      this.setState({error: 'Ops! Parece que esta faltando algo'})
    }

   

    event.preventDefault(); //Faz com que não atualize a pagina e apague oq está escrito nos campos
  }


  render(){
    return(
      <div>
        <h1>Novo usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/>
          <br/>
          <label>Email: </label>
          <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          <br/>
          <label>Senha: </label>
          <input type="password" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
          <br/>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}*/

export default App;
