import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ICountState, IRootState} from "../store/rootStore";
import {CountAction, decrement, increment} from "../actions/countAction";
import {Dispatch} from "redux";

const NumberCard: React.FunctionComponent = () => {
    const { countForIncrement, countForDecrement } =
        useSelector<IRootState, ICountState>(state => state.count)
    const dispatch: Dispatch<CountAction> = useDispatch();

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h4>Reduxによる状態管理</h4>
            </div>
            <div className="card-body">
                <div className="card-title">
                    カウントボタン
                </div>
                <div className="card-text">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary mx-2" onClick={() => dispatch(increment(1))}>
                            加算するボタン <span className="badge badge-light">{countForIncrement}</span>
                        </button>
                        <button type="button" className="btn btn-info mx-2" onClick={() => dispatch(decrement(1))}>
                            減算するボタン <span className="badge badge-light">{countForDecrement}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberCard;
