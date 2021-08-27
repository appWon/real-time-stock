import React, { FC, useEffect, useContext } from 'react';
import GlobalStyle from './style/GlobalStyle';
import StockList from './pages/stockList';
import { api } from '@/lib/api';

import { Coin, CoinListContext } from '@/lib/contexts/CoinList';

const App: FC = () => {
  const { setCoinList } = useContext(CoinListContext);

  //전체 리스트 로딩
  const getCoinList = async () => {
    const { data } = await api.get<Coin[]>('/market/all');
    setCoinList(data);
  };

  useEffect(() => {
    getCoinList();
  }, []);

  return (
    <>
      <GlobalStyle />
      <StockList></StockList>
    </>
  );
};

export default App;
