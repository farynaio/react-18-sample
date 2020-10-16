import Coin from "./Coin";

describe("Coin", () => {
    it("#priceInc", () => {
        const coin = new Coin("USD", 10, 5);
        expect(coin.priceInc).toEqual(100);

    });
})
