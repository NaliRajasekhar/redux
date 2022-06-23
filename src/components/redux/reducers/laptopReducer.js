import {BUY_LAPTOP} from '../actions/actions.js';
const initialstate = {
    numberOfLaptops:100
}

const laptopreducer = (state = initialstate,action) => {
    switch(action.type){
        case BUY_LAPTOP :
        return {numberOfLaptops: state.numberOfLaptops-1}
        default:
        return state;
    }
}

export default laptopreducer;