/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';

/**
 * import : local
 */
import App from 'src/components/App';

/**
 * Render - Rendu d'un composant React dans le DOM
 */

const rootComponent = <App />;
const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);
