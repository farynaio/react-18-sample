import { COINS_TO_FETCH } from "../config/Constants";
import { fetchCoins } from "./CoinsApi";

const currency = "USD";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ "RAW": { "BTC": { [currency]: { "PRICE": 10, "OPENDAY": 5 } } } }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

it("Should return proper data", async () => {
    expect(await fetchCoins("USD", COINS_TO_FETCH)).toBeInstanceOf(Array);
});

it("Should throw when server error", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    return fetchCoins("USD", COINS_TO_FETCH).catch(e => expect(e).toMatch("API is down"));
});