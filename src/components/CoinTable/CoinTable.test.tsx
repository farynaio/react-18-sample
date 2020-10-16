import React from 'react';
import { shallow } from 'enzyme';
import CoinTable from './CoinTable';
import Coin from '../../model/Coin';

it('renders without crashing', () => {
    const coins = [new Coin("BTC", 10, 5)];
    shallow(<CoinTable currency="USD" coins={coins} />);
});