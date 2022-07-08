import { applyMiddleware, combineReducers,  createStore} from 'redux'
import thunk from 'redux-thunk'
import { LinkReducer } from './Reducers/LinkReducer'
import { ModalReducer } from './Reducers/ModalReducer'

const rootReducer = combineReducers({
    LinkReducer,
    ModalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))