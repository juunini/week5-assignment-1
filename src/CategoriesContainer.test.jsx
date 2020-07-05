import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories, selectedCategory } from '../fixtures/categories';

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
    selectedCategory,
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  expect(getByText(/한식/)).not.toBeNull();
});
