import React from 'react';
import { render } from '@testing-library/react';

import Filter from './Filter';

describe('Filter', () => {
  it('renders', () => {
    const { container } = render(<Filter />);
    expect(container).toMatchSnapshot();
  });
});
