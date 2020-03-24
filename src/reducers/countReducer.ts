import {CountAction, DECREMENT, INCREMENT} from "../actions/countAction";
import {ICountState, initCountState} from "../store/rootStore";

const countReducer = (state: ICountState = initCountState, action: CountAction) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                countForIncrement: state.countForIncrement + action.payload.delta
            };
        case DECREMENT:
            return {
                ...state,
                countForDecrement: state.countForDecrement - action.payload.delta
            };
        default:
            return state;
    }
};

export default countReducer;
