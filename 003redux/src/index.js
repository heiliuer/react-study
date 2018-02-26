import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './store/01hello/index'
import './store/02hello/index'
import './store/03hello-redux-devtools/index'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
