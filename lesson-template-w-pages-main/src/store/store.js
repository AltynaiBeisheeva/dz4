import {legacy_createStore as createStore} from "redux";

import {countReducer} from "./counterReduser.js";

export  const store = createStore(countReducer)