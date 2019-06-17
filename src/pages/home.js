import React from 'react';
import '../style/home.css';
import Button from '../components/Button';
import Input from '../components/Input';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
const firebaseAppAuth = firebase.auth();
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

  // handleClick = () =>{
  //   const object = {
  //     email: this.state.email,
  //     password: this.state.password
  //   }
  //   database.collection('users').add(object)
  //   this.setState({
  //     listItem: this.state.listItem.concat(object)
  //   })
  // }

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

  createUser = () => {
    this.props.createUserWithEmailAndPassword(this.state.email,
      this.state.password)
      .then(()=>
      alert('Conta criada com sucesso!'))
  }

  signUser = () => {
    this.props.signInWithEmailAndPassword(this.state.email,
      this.state.password)
      .then(()=> 
      alert('logou'));
  }

  render() {
    console.log(this.props)
    return (
      <div className="App image">
          <p className="title">Burger Queen</p>
          <Input className="style-input" value={this.state.email}
            onChange={this.handleChangeEmail}
            text="Digite seu e-mail">
          </Input>
          <Input className="style-input" value={this.state.password}
            onChange={this.handleChangePassword}
            text="Digite sua senha">
          </Input>
          <select className="selectStyle" onChange={(e) => this.handleChangeEmail(e)}>
            <option selected>cozinha</option>
            <option>salão</option>
          </select>
          <Button text="Logar" onClick={this.signUser}></Button>
          <Button text="Criar Conta" onClick={this.createUser}></Button>
      </div>
    );
  }
}


export default withFirebaseAuth({
  firebaseAppAuth,
})(App);
