import React from 'react';
import { shallow } from 'enzyme';
import TableHeaderSortable from './TableHeaderSortable';

it('renders without crashing', () => {
    shallow(<TableHeaderSortable caption="caption" onClick={() => null} />);
});