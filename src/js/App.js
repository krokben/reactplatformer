import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Hero from './components/Hero';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Hero />
      </div>
    </Provider>
  );
}
