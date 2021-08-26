import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Coin, CoinListStore, CoinListContext } from '@/lib/contexts/CoinList';

ReactDOM.render(
  <CoinListStore>
    <App />
  </CoinListStore>,
  document.getElementById('root')
);
