import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import DashboardPage from '../../components/DashboardPage';

test('should display Dashboard with no items', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<DashboardPage />)
    expect(renderer.getRenderOutput()).toMatchSnapshot();
})