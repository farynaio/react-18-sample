import React, { useEffect, useReducer } from "react";
import Coin from '../../model/Coin';
import TableHeaderSortable from "../TableHeaderSortable/TableHeaderSortable";
import "./CoinTable.css";

interface CoinTableProps {
    currency: string;
    coins: Coin[];
};

type ActionType =
    | { type: "updateCoins", payload: Coin[] }
    | { type: "sortBySymbol" }
    | { type: "sortByCurrentPrice" }
    | { type: "sortByOpeningPrice" }
    | { type: "sortByPriceInc" };

const initialState = {
    sortBySymbolAsc: false,
    sortByCurrentPriceAsc: false,
    sortByOpeningPriceAsc: false,
    sortByPriceIncAsc: false,
    coins: [] as Coin[],
    activeSort: ""
};

const sortNumbers = (coins: Coin[], sortKey: string, ascending: boolean): Coin[] => {
    if (ascending) {
        coins.sort((a: any, b: any) => (a[sortKey] - b[sortKey]));
    } else {
        coins.sort((a: any, b: any) => (a[sortKey] - b[sortKey]) * -1);
    }
    return coins;
}

const sortStrings = (coins: Coin[], sortKey: string, ascending: boolean): Coin[] => {
    if (ascending) {
        coins.sort((a: any, b: any) => a[sortKey].localeCompare(b[sortKey]) * -1);
    } else {
        coins.sort((a: any, b: any) => a[sortKey].localeCompare(b[sortKey]));
    }
    return coins;
}

function reducer(state: typeof initialState, action: ActionType) {
    switch (action.type) {
        case "updateCoins":
            return { ...initialState, coins: action.payload };
        case "sortBySymbol":
            return { ...initialState, coins: sortStrings([...state.coins], "symbol", !state.sortBySymbolAsc), sortBySymbolAsc: !state.sortBySymbolAsc, activeSort: "symbol" };
        case "sortByCurrentPrice":
            return { ...initialState, coins: sortNumbers([...state.coins], "currentPrice", !state.sortByCurrentPriceAsc), sortByCurrentPriceAsc: !state.sortByCurrentPriceAsc, activeSort: "currentPrice" };
        case "sortByOpeningPrice":
            return { ...initialState, coins: sortNumbers([...state.coins], "openingPrice", !state.sortByOpeningPriceAsc), sortByOpeningPriceAsc: !state.sortByOpeningPriceAsc, activeSort: "openingPrice" };
        case "sortByPriceInc":
            return { ...initialState, coins: sortNumbers([...state.coins], "priceInc", !state.sortByPriceIncAsc), sortByPriceIncAsc: !state.sortByPriceIncAsc, activeSort: "priceInc" };
        default:
            throw new Error();
    }
}

const CoinTable = ({ currency, coins }: CoinTableProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { sortBySymbolAsc, sortByCurrentPriceAsc, sortByOpeningPriceAsc, sortByPriceIncAsc, activeSort } = state;

    useEffect(() => {
        dispatch({ type: "updateCoins", payload: coins });
    }, [coins]);

    return (
        <table className="coin-table">
            <thead>
                <tr>
                    <TableHeaderSortable caption="Coin Name" isAscending={sortBySymbolAsc} isActive={activeSort === "symbol"} onClick={() => dispatch({ type: "sortBySymbol" })} />
                    <TableHeaderSortable caption={`Current Price (${currency})`} isAscending={sortByCurrentPriceAsc} isActive={activeSort === "currentPrice"} onClick={() => dispatch({ type: "sortByCurrentPrice" })} />
                    <TableHeaderSortable caption={`Opening Price (${currency})`} isAscending={sortByOpeningPriceAsc} isActive={activeSort === "openingPrice"} onClick={() => dispatch({ type: "sortByOpeningPrice" })} />
                    <TableHeaderSortable caption="Price Increase" isAscending={sortByPriceIncAsc} isActive={activeSort === "priceInc"} onClick={() => dispatch({ type: "sortByPriceInc" })} />
                </tr>
            </thead>
            <tbody>
                {state.coins.map((coin: Coin) =>
                    <tr key={coin.symbol}>
                        <td>{coin.symbol}</td>
                        <td>{coin.getCurrentPrice(currency)}</td>
                        <td>{coin.getOpeningPrice(currency)}</td>
                        <td>{coin.getPriceIncrease(currency)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default CoinTable;