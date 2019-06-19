import React from 'react';
import '../style/home.css';
import Button from '../components/Button';
import Input from '../components/Input';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      userType: ""
  };
}

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  signIn = () => {
    this.props.signInWithEmailAndPassword(this.state.email,
      this.state.password)
      .then((resp)=> {
        const id = resp.user.uid;
        database.collection('users').doc(id).get()
        .then(resp => {
          const data = resp.data();
          this.props.history.push(`/${data.userType}`)
        })
    });

  }

  render() {
    return (
      <main className="App image">
          <p className="title">Burger Queen</p>
          <Input className="style-input" 
            value={this.state.email}
            onChange={this.handleChangeEmail}
            text="Digite seu e-mail">
          </Input>
          <Input className="style-input" 
            type="password" 
            value={this.state.password}
            onChange={this.handleChangePassword}
            text="Digite sua senha">
          </Input>
          <Button text="Logar" onClick={this.signIn}></Button>
          <Link className="App" to='./create-account'>Criar conta</Link>
      </main>
    );
  }
}


export default withFirebaseAuth({
  firebaseAppAuth,
})(Home);
