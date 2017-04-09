/**
 * Created by Liukeyi on 2017/2/8.
 */
import { REQUEST_POST, RECEIVE_POST, ERROR_POST } from './action'

const initState = {
    suggestion: [{
        name: 'C',
        year: '1972',
    }, {
        name: 'Elm',
        year: '2012',
    }],
};

function AsyncAPP(state = initState, action) {
    switch (action.type) {
        case REQUEST_POST:
            return state
        case RECEIVE_POST:
            return Object.assign({}, state, action.data)
        case ERROR_POST:
            console.log(action.data)
            return state
    }

    return state
}

export default AsyncAPP