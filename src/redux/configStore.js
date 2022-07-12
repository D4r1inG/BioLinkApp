import { applyMiddleware, combineReducers,  createStore} from 'redux'
import thunk from 'redux-thunk'
import { LinkReducer } from './Reducers/LinkReducer'
import { ModalReducer } from './Reducers/ModalReducer'
import { ProfileReducer } from './Reducers/ProfileReducer'

const rootReducer = combineReducers({
    LinkReducer,
    ModalReducer,
    ProfileReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))