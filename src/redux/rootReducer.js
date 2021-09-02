import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import { cardPersistConfig } from "./persist.config";

// REDUCERS
import cardReducer from "./cards/card.reducer";

const rootReducer = combineReducers({
    cards: persistReducer(cardPersistConfig, cardReducer),
});

export default rootReducer;
