/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarvelService();

marvelService.getCharacter(1011190).then(res => console.log(res));

ReactDOM.render(
	<App/>,
  document.getElementById('root')
);

