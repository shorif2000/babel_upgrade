import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { titleReducer } from 'redux-title';

const rootReducer = combineReducers({
    router: routerReducer,
    form: formReducer,
    //formIAMUpload: formReducer,
    title: titleReducer,
});

export default rootReducer;

