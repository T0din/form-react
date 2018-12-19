import React, { Component } from 'react';
import axios from 'axios';

import Login from 'src/components/App/Login';
import ForgottenPassword from 'src/components/App/ForgottenPassword';

import textData from 'src/data/text';
import './app.scss';

class App extends Component {
  // state = {
  //   view: 'login',
  //   lang: 'fr',
  // };

  constructor() {
    super();
    console.log('Coucou depuis le constructor');
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
    this.setState({
      view, // ===> view: view
    });
  };

  changeInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    // Cette méthode est appelée une seule fois après le render
    // Utilisier axios
    // POur poster state.email et state.password à mon api de login
    // En cas de succès, je peux modifier mon state
    // En cas d'erreur, je peux aussi modifier mon state, ou alors prevenir l'user de l'echec

    // Avec Axios faire une requete post sur l'adresse: localhost:3000/login

    // Toujours avec axios faire une requete sur localhost:3000/forget en envoyant email

    axios.post('http://localhost3000/login')
    .then((response) => {
    // handle success
      console.log(response);
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });

    // axios.post('/user', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone',
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    console.log('coucou depuis le render');
    const {
      view, email, password, lang,
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
        { view === 'login' && (
          <Login
            data={textData[lang].login}
            email={email}
            password={password}
            onChangeView={this.changeView('password')}
            onChangeInput={this.changeInput}
          />) }
        { view === 'password' && (
          <ForgottenPassword
            data={textData[lang].password}
            email={email}
            onChangeView={this.changeView('login')}
            onChangeInput={this.changeInput}
          />) }
      </div>
    );
  }
}

export default App;
