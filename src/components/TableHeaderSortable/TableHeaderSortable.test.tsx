import React from 'react';
import { shallow, mount } from 'enzyme';
import TableHeaderSortable from './TableHeaderSortable';

it('renders without crashing', () => {
    shallow(<TableHeaderSortable caption="caption" onClick={() => null} />);
});

it('renders with arrow up', () => {
    const wrapper = mount(<table><thead><tr><TableHeaderSortable caption="caption" onClick={() => null} isActive={true} /></tr></thead></table>);
    expect(wrapper.exists('svg[data-icon="arrow-up"]')).toBeTruthy();
});

it('renders with arrow down', () => {
    const wrapper = mount(<table><thead><tr><TableHeaderSortable caption="caption" onClick={() => null} isActive={true} isDescending={true} /></tr></thead></table>);
    expect(wrapper.exists('svg[data-icon="arrow-down"]')).toBeTruthy();
});