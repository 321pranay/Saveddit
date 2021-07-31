import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import usernameReducer from './reducers/usernameReducer'
import savedDataReducer from './reducers/savedDataReducer'
import subredditsFilterReducer from './reducers/subredditsFilterReducer'
import searchFilterReducer from './reducers/searchFilterReducer'


const reducer = combineReducers({
    username: usernameReducer,
    savedData: savedDataReducer,
    selectedSubreddits: subredditsFilterReducer,
    searchQuery: searchFilterReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store
