import React, { Component } from 'react';
import './App.css';

import Image from './components/Image';
import Input from './components/Input';

/*class App extends Component{
getBox(number){
    return(
      <div>
        <h2>{"Hola mundo yo soy la cajita: " + number}</h2>
      </div>
    );
  }


  render(){//solo se ejecuta 1 vez
    return(
      <div>
        {this.getBox(1)}
        {this.getBox(2)}
      </div>
    );
  }
}
*/

//-------------------------
// boton--------
/*
class App extends Component{
  constructor(){
    super();
    this.state = {
      text: "Hola mundo",
      text2: "Estoy aprendiendo react"
    };

    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    this.setState({ text2: "Ups, el estado ha cambiado"});
  }

  render(){
    return(
      <div>
        <h2 onClick={this.onClick}>{ this.state.text }</h2>
        <h4>{ this.state.text2 }</h4>
      </div>
    );
  }
}
*/



/* METODOS CICLO DE VIDA COMPONENTE
--------------------------------------------------------------
  - componentWillMount()
      se ejecuta antes de que cargue el componente - util para api

  - componentDidMount()
      se ejecuta despues de que cargue el componente

  - componentWillUnmount()
      cuando va cambiar el render, (como cuando va cambiar de pagina)

  - componentWillReceiveProps()
      cuando un componente padre le envia componentes a hijo

  - componentShouldUpdate()
      devuelve si debe ser actualizado el componente --- ???

  - componentWillUpdate()
      se ejecuta justo despues del metodo anterior
----------------------------------------------------------------------------
*/



// padre e hijo
/*
class App extends Component{
  constructor(){
    super();

    this.state = {
      inputType: ''
    }

    this.onClickChild = this.onClickChild.bind(this);
  }

  onClickChild(e){
    this.setState({ inputType: 'number' });
  }

  componentWillMount(){
    console.log("metodo will mount");
  }

  render(){
    return(
      <div>
        <Image id={1} src="" onClickChild={this.onClickChild}/>
        <Input id={2} type={this.state.inputType}/>
      </div>
    );
  }
}


*/


// BOTONES Y EVENTOS
class App extends Component{
  
}
export default App;
