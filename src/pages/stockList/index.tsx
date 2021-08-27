import React, { FC, useContext, useEffect } from 'react';
import * as S from './style.stock';
import { socket } from '@/lib/api';

import { CoinListContext } from '@/lib/contexts/CoinList';
import SearchBar from '../../components/SearchBar';
import StockWidget from '../../components/StockWidget';

const StockList: FC = () => {
  const { serachCoinList } = useContext(CoinListContext);

  useEffect(() => {
    socket.onopen = () => {
      console.log('연결');
    };
  }, []);

  useEffect(() => {
    if (!serachCoinList.length) return;

    const coinNameList = serachCoinList.map(({ market }) => market);
    socket.send(
      JSON.stringify([
        { ticket: 'test' },
        { type: 'ticker', codes: coinNameList },
      ])
    );
  }, [serachCoinList]);

  socket.onmessage = ({ data }: any) => {
    const reader = new FileReader();

    reader.readAsText(data);
    reader.onload = ({ target }: any) => {
      const result = target.result;
      console.log(JSON.parse(result));
    };
  };

  return (
    <S.StockListContainer>
      <SearchBar />
      <S.CoinListCotainer>
        {serachCoinList.length
          ? serachCoinList.map((coinState: any) => (
              <StockWidget key={coinState.market} {...coinState} />
            ))
          : '로딩 중'}
      </S.CoinListCotainer>
    </S.StockListContainer>
  );
};

export default StockList;
