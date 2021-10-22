import React, { Component } from 'react';
import Membro from './components/Membro';
import Feed from './components/Feed';

class App extends Component{

  /*constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount(){ //Depois que o componente é montado, ele roda o que está dentro da função
    setInterval(() =>{
      this.setState({ hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){
    console.log("Atualizou!!");
  }
*/

constructor(props){
  super(props);
  this.state={
    feed:[
      {id:1, username: 'Mysael', curtidas: 10, comentarios: 2},
      {id:2, username: 'Lucas', curtidas: 120, comentarios: 20},
      {id:3, username: 'Amanda', curtidas: 15, comentarios: 3},
      {id:4, username: 'Ricardo', curtidas: 1, comentarios: 0}
    ]
  };
}

  render(){
    return (
      /*<div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>*/
      /*2
      <div>
        <Membro/>
      </div>*/
      <div>
        {this.state.feed.map((item)=>{
          return(
            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
          )
        })}
      </div>

    );
  }
}


export default App;
