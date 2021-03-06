import React, { Component } from 'react';
import axios from 'axios';

import Login from 'src/components/App/Login';
import ForgottenPassword from 'src/components/App/ForgottenPassword';

import textData from 'src/data/text';
import './app.scss';

;

class App extends Component {
  // state = {
  //   view: 'login',
  //   lang: 'fr',
  // };
  
  constructor() {
    super();
    this.state = {
      view: 'login',
      lang: 'fr',
    };
  }
  
  
  // Change view est executée par le composant Login ET par le composant Password
  // Change view renvoie une fonction qui change le state
  // Pour savoir en quoi changer le state change view reçoit un param
  // Change view utilise ce param dans la fonction qu'il retourne
  // Pour que la fonction retournée change le state dans la bonne vue
  
  changeView = view => () => {
    console.log(instance);
    this.setState({
      view, // ===> view: view
    });
  };

  changeInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };



  handleLogin = (event) => {
    event.preventDefault();
    // const instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
    // })
    axios.post('http://localhost:3000/login', {
      email: this.state.email,
      password: this.state.password,
    })
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        this.setState({
          view: 'name',
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        let errorInfo = error.response.status;
        if (error.response.status === 400) {
          errorInfo = 'Email inconnu ou mot de passe incorrect';
        } else if (error.response.status === 500) {
          errorInfo = 'Impossible de joindre le serveur';
        }
        this.setState({
          view: 'error-login',
          error: errorInfo,
        });
      });
  };

  handlePassword = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/forgot', {
      email: this.state.email,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          view: 'login',
          password: response.data,
        });
      })
      .catch((error) => {
        let errorInfo = error.response.status;
        if (error.response.status === 400) {
          errorInfo = 'Cet email n\'existe pas';
        } else if (error.response.status === 500) {
          errorInfo = 'Impossible de joindre le serveur';
        }
        this.setState({
          view: 'error-login',
          error: errorInfo,
        });
      });
  };


  // componentDidMount() {
  //   // Cette méthode est appelée une seule fois après le render
  //   // Utilisier axios
  //   // POur poster state.email et state.password à mon api de login
  //   // En cas de succès, je peux modifier mon state
  //   // En cas d'erreur, je peux aussi modifier mon state, ou alors prevenir l'user de l'echec

  //   // Avec Axios faire une requete post sur l'adresse: localhost:3000/login

  //   // Toujours avec axios faire une requete sur localhost:3000/forget en envoyant email

  //   axios.post('http://localhost:3000/login', {
  //     email: this.state.email,
  //     password: this.state.password,
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


  render() {
    // console.log('coucou depuis le render');
    const {
      view, email, password, lang, data, error,
    } = this.state;
    // Pour automatiser par exemple un menu avec toutes les langues
    // const listeDeLangues = Object.keys(textData);
    // listeDeLangues.map(langue => (
    //   <LienDeMenu title={langue />}
    // ))
    // const email = this.state.email
    // const password = this.state.password
    // const view = this.state.view
    return (
      <div className="app">
        {view === 'error-login' && (
          <div>
            <a
              className="app-link app-link--back"
              onClick={this.changeView('login')}
            >
              Retour
            </a>
            {error}
          </div>
        )}
        { view === 'login' && (
          <Login
            data={textData[lang].login}
            email={email}
            password={password}
            onChangeView={this.changeView('password')}
            onChangeInput={this.changeInput}
            onHandleLogin={this.handleLogin}
          />) }
        { view === 'password' && (
          <ForgottenPassword
            data={textData[lang].password}
            email={email}
            onChangeView={this.changeView('login')}
            onChangeInput={this.changeInput}
            onHandlePassword={this.handlePassword}
          />) }
        { view === 'name' && (
          <div className="welcomeName">
           Welcome {data}
            <a
              className="app-link app-link--back"
              onClick={this.changeView('login')}
            >
              Retour
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default App;
