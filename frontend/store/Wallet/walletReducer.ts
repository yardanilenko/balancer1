import {INIT_WALLET} from "./actionTypes";

const initialState = {};
export default function walletReducer(state = initialState, action: { type: any; payload: any; }) {
    switch (action.type) {
        case INIT_WALLET : {
            return action.payload;
        }
        default :
            return state
    }
}
