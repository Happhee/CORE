import { combineReducers } from 'redux'
import user from './user_reducer'
import teaacher from './teacher_reducer'

const rootReducer = combineReducers({
    user,
    teaacher,
});

export default rootReducer