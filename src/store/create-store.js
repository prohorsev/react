import { combineReducers, createStore } from "redux"
import { conversationsReducer } from "./conversations"
import { messagesReducer } from "./messages"

const reducers = combineReducers({
  messagesReducer,
  conversationsReducer,
})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : () => {},
)
