jest.useFakeTimers();
import React from 'react';
import renderer from 'react-test-renderer';
import { renderRouter, screen } from 'expo-router/testing-library';
import App from '../app';
import { Provider } from 'app/provider';
import { SafeArea } from 'app/provider/safe-area';
import Cards from '@gluestack/app/Dashboard/Cards';

describe('<Card />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(
      <Provider>
        <Cards />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
