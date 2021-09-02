// DATA
import {data} from 'src/data/data'
import {getBotCard, getUserCard,usersSumResult} from "./card.utilis"
import types from "./card.types";

const INITIAL_STATE = {
    data:[...data],
    queue:'user',
    userCards:[],
    botCards:[],
    result:null,
    ready:null
};

const cardReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case types.GET_USER_CARDS:
            const result1 = getUserCard(state.userCards,state.data)
            return {
                ...state,
                userCards: result1.userCards,
                data: result1.cards
            }
        case types.GET_BOT_CARDS:
            const result2 = getBotCard(state.botCards,state.data,state.ready,0)
            return {
                ...state,
                botCards: result2.botCards,
                data:result2.cards
            }
        case types.USER_READY:
            return {...state,ready: true}
        case types.READY_OPEN_CARDS:
            return {...state,result: usersSumResult(state.userCards, state.botCards)}
        case types.NEW_GAME:
            return INITIAL_STATE
        default:
            return state;
    }
};

export default cardReducer;
