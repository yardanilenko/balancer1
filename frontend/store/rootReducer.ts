import {combineReducers} from 'redux';
import walletReducer from "./Wallet/walletReducer";


export default combineReducers({
    wallet: walletReducer
});
