import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import firebase from "./firebaseConfig";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
const database = firebase.firestore();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      listItem: []
    
  };
}

  handleClick = () =>{
    const object = {
      email: this.state.email,
      password: this.state.password
    }
    database.collection('users').add(object)
    this.setState({
      listItem: this.state.listItem.concat(object)
    })
  }

  componentDidMount() {
    database.collection('users').get()
      .then((querySnapshot)=> {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({listItem: data})
    })
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="App image">
        <header className="App-header">
          <p className="title">Burger Queen</p>
          <Input className="style-input" value={this.state.email}
            onChange={this.handleChangeEmail}
            text="Digite seu e-mail">
          </Input>
          <Input className="style-input" value={this.state.password}
            onChange={this.handleChangePassword}
            text="Digite sua senha">
          </Input>
          <select className="selectStyle">
            <option>cozinha</option>
            <option>salão</option>
          </select>
          <Button text="Entrar" onClick={this.handleClick}></Button>
        </header>
      </div>
    );
  }
}


export default App;
