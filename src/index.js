import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './redux/store';
import './index.css';
import Bateria from './componentes/Bateria';

ReactDOM.render(
  <Provider store={store}>
    <Bateria/>
  </Provider>
  ,document.querySelector('#root')
);
