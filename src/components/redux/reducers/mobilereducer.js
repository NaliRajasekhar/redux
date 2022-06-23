import {BUY_MOBILE} from '../actions/actions.js';
const initialstate = {
    numberOfMobiles:1000
}

const mobilereducer = (state = initialstate,action) => {
    switch(action.type){
        case BUY_MOBILE :
        return {numberOfMobiles: state.numberOfMobiles-1}
        default:
        return state;
    }
}

export default mobilereducer;