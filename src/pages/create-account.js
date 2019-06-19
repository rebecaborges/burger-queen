import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import firebase from '../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';
import "../style/home.css"

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      userType: ""
    }
  };

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleChangeType = (event) => {
    this.setState({userType: event.target.value})
  }

  signUp = () => {
    const { email, name, userType } = this.state;
    this.props.createUserWithEmailAndPassword(this.state.email,
      this.state.password)
      .then((resp)=> {
        const id = resp.user.uid;
        database.collection("users").doc(id).set({
          name,
          email,
          userType
        })
        .then(() => {
          this.props.history.push(`/${this.state.userType}`)
          alert('conta criado com sucesso')
        })
      
    });
  }

  render() {
    return (
      <main className="App image">
          <p className="title">Burger Queen</p>
          <Input className="style-input" value={this.state.name}
            onChange={this.handleChangeName}
            text="Nome">
          </Input>
          <Input className="style-input" value={this.state.email}
            onChange={this.handleChangeEmail}
            text="E-mail">
          </Input>
          <Input className="style-input" 
            type="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
            text="Senha">
          </Input>
          <select className="selectStyle" onChange={(e) => this.handleChangeType(e)}>
            <option selected >Setor</option>
            <option value="kitchen">Cozinha</option>
            <option value="saloon">Salão</option>
          </select>
          <Button text="Criar Conta" onClick={this.signUp}></Button>
      </main>
    );
  }
}



export default withFirebaseAuth({
  firebaseAppAuth,
})(CreateUser);
