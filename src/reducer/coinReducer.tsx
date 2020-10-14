import Coin from "../model/Coin";

const initialState = {
    coins: []
};

type ACTION_TYPE =
    { type: "fetch"; payload: Array<Coin> };

const reducer = (state: typeof initialState, action: ACTION_TYPE) => {
    switch (action.type) {
        case "fetch": return { coins: action.payload };
        default: throw new Error();
    }
};