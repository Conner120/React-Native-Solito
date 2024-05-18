import React from 'react';
import renderer from 'react-test-renderer';
import { renderRouter, screen } from 'expo-router/testing-library';
import App from '../app';
import { Provider } from 'app/provider';
import { SafeArea } from 'app/provider/safe-area';
import Card from '@gluestack/app/Dashboard/Cards';

it('my-test', async () => {
  const MockComponent = jest.fn(() => (
    <SafeArea>
      <Provider>
        <App />
      </Provider>
    </SafeArea>
  ));

  renderRouter(
    {
      index: MockComponent,
    },
    {
      initialUrl: '/',
    }
  );

  expect(screen).toHavePathname('/');
});

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(
      <Provider>
        <Card />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
