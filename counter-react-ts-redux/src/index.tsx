import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore<{value: number, option: number}>(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
