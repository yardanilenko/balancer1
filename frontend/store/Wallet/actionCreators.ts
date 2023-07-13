import {INIT_WALLET } from "./actionTypes";
import { Dispatch } from "redux";

export const initWalletAC = () => async (dispatch: Dispatch) => {

    try {
        const walletAddress = (window as any).ethereum.selectedAddress;
        dispatch({type: INIT_WALLET, payload: walletAddress});        
    } catch (error) {
        console.log(error)
    }

};