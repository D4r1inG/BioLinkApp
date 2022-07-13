import { applyMiddleware, combineReducers,  createStore} from 'redux'
import thunk from 'redux-thunk'
import { LinkReducer } from './Reducers/LinkReducer'
import { ModalReducer } from './Reducers/ModalReducer'
import { ProfileReducer } from './Reducers/ProfileReducer'
import { SkeletonReducer } from './Reducers/SkeletonReducer'
import { UserReducer } from './Reducers/UserReducer'

const rootReducer = combineReducers({
    LinkReducer,
    ModalReducer,
    ProfileReducer,
    UserReducer,
    SkeletonReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))