import Coin from "../model/Coin";

const CRYPTO_COMPARE_API_URL = "https://min-api.cryptocompare.com/data/";

export const fetchCoins = async (currency: string, cryptoCoins: Array<string>): Promise<Array<Coin>> => {
    const coinsParam = cryptoCoins.join(",");
    const url = `${CRYPTO_COMPARE_API_URL}pricemultifull?fsyms=${coinsParam}&tsyms=${currency}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        let data: any = await res.json();
        data = data["RAW"];

        const result: Array<Coin> = [];

        for (let elem in data) {
            const coin = new Coin(elem, data[elem][currency]["PRICE"], data[elem][currency]["OPENDAY"]);
            result.push(coin);
        }

        return result;

    } catch (e) {
        console.error("Fetch coins data failed!");
        throw e;
    }
};
