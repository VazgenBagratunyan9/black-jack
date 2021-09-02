import types from "./card.types";
import {type} from "@testing-library/user-event/dist/type";

export const getCardUser = (cards)=>{
    return {
        type:types.GET_USER_CARDS,
    }
}
export const getCardBot = (cards)=>{
    return {
        type:types.GET_BOT_CARDS,
    }
}
export const changeCard =  ()=>  (dispatch)=>{
    dispatch(getCardBot())

    dispatch(getCardUser())
}

export const userReadyOpenCards = (cards)=>{
    return {
        type:types.READY_OPEN_CARDS,
        payload:cards
    }
}
export const userReady = ()=>{
    return {
        type:types.USER_READY
    }
}
export const readyOpenCards = (cards)=>  (dispatch)=>{
    dispatch(userReady())
    dispatch(getCardBot())
    dispatch(userReadyOpenCards(cards))
}
export const newGame = ()=>{return {type:types.NEW_GAME}}