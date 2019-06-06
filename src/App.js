import React from 'react';
import './App.css';
import './Button.css';
import Button from './components/Button';
import Input from './components/Input';

import firebase from "./firebaseConfig";
const database = firebase.firestore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""

    };
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <p>Burger Queen</p>
          <Input value={this.state.email}
            onChange={this.handleChangeEmail} 
            text="Digite seu e-mail">
          </Input>
          <Input value={this.state.password}
            onChange={this.handleChangePassword}
            text="Digite sua senha">
          </Input>
          <Button text="Entrar" onClick={()=> alert(this.state.inputValue)}></Button>
        </header>
      </div>
    );
  }
}


export default App;
