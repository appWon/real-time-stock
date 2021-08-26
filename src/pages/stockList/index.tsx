import React, { FC, useContext } from 'react';
import * as S from './style.stock';

import { CoinListContext } from '@/lib/contexts/CoinList';
import SearchBar from '../../components/SearchBar';
import StockWidget from '../../components/StockWidget';

const StockList: FC = () => {
  const { serachCoinList } = useContext(CoinListContext);

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
