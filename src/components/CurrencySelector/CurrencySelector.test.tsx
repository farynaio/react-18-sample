import React from 'react';
import { shallow } from 'enzyme';
import { COINS_TO_FETCH } from '../../config/Constants';
import Coin from '../../model/Coin';
import CurrencySelector from './CurrencySelector';

it('renders without crashing', () => {
    shallow(<CurrencySelector currencies={COINS_TO_FETCH} current="USD" onChange={() => null} />);
});