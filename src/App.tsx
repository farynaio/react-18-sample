import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchCoins } from './ajax/CoinsApi';
import './App.css';
import CoinTable from './components/CoinTable/CoinTable';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import { COINS_TO_FETCH, CURRENCIES } from './config/Constants';
import Coin from './model/Coin';

function App() {
  const [currency, setCurrency] = useState("USD");
  const [coins, setCoins] = useState<Array<Coin>>([]);

  useEffect(() => {
    fetchCoins(currency, COINS_TO_FETCH).then(res => {
      setCoins(res);
    })
  }, [currency]);

  return (
    <div className="App">
      <CurrencySelector currencies={CURRENCIES} current={currency} onChange={(e: ChangeEvent<HTMLSelectElement>): void => setCurrency(e.target.value)} />
      <CoinTable currency={currency} coins={coins} />
    </div>
  );
}

export default App;
