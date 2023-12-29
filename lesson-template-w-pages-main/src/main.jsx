import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {legacy_createStore as createStore} from "redux";
import {Provider} from "react-redux";
import './index.css'
import App from './App'

import {store} from "./store/store.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Provider store={store}>
    <App />
      </Provider>
  </BrowserRouter>
)
