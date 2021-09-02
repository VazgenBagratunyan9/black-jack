import localStorage from "redux-persist/lib/storage";

export const cardPersistConfig = {
    key: "card",
    storage: localStorage,
    whitelist: ["card"],
};


