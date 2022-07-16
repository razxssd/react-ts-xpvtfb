import * as React from 'react';
import { Layout } from '../core';
import { Header } from './features/Header/Header';
import { Body } from './features/Body/Body';
import { Store } from '../store/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <Header />
        <Body />
      </Layout>
    </Provider>
  );
}

export default App;
