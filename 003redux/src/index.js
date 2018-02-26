import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './store/01hello'
import './store/02hello'

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
