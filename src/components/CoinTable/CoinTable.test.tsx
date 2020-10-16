import React from 'react';
import { shallow, mount } from 'enzyme';
import CoinTable from './CoinTable';
import Coin from '../../model/Coin';

it('renders without crashing', () => {
    const coins = [new Coin("BTC", 10, 5)];
    shallow(<CoinTable currency="USD" coins={coins} />);
});

it('should render proper number of body rows', () => {
    const coins = ["BTC", "XRP", "ETH", "USDT", "BNB"].map((coin) => new Coin(coin, 10, 5));
    const wrapper = mount(<CoinTable currency="USD" coins={coins} />);
    expect(wrapper.find("tbody tr").length).toBe(coins.length);
});