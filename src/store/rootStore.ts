import {combineReducers, createStore, Store} from "redux";
import countReducer from "../reducers/countReducer";
import {CountAction} from "../actions/countAction";

export interface ICountState {
    countForIncrement: number;
    countForDecrement: number;
}
export const initCountState: ICountState = {
    countForIncrement: 0,
    countForDecrement: 100
};

export interface IRootState {
    count: ICountState;
}
export const initRootState: IRootState = {
    count: initCountState
};

const rootStore: Store<IRootState, CountAction> = createStore(combineReducers<IRootState, CountAction>({
    count: countReducer
}));


export default rootStore;
