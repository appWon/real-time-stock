import React, { FC, useState, Dispatch, SetStateAction } from 'react';

export interface Coin {
  english_name: string;
  korean_name: string;
  market: string;
}

export interface CoinListContextValue {
  coinList: Coin[];
  serachCoinList: Coin[];
  setCoinList: Dispatch<SetStateAction<Coin[]>>;
  setSearchListDeduplicate(serachCoinData: Coin[]): void;
}

export const CoinListContext = React.createContext<CoinListContextValue>({
  coinList: [],
  serachCoinList: [],
  setCoinList: () => [],
  setSearchListDeduplicate: () => [],
});

export const CoinListStore: FC = ({ children }) => {
  //코인 전체 리스트 REST API 검색 데이터
  const [coinList, setCoinList] = useState<Coin[]>([]);
  //코인 REST API 검색 데이터
  const [serachCoinList, setSearchCoinList] = useState<Coin[]>([]);
  //리얼 타임 코인 데이터
  const [realTimeCoinList, setRealTimeCoinList] = useState<any[]>([]);

  const setSearchListDeduplicate = (serachCoinData: Coin[]) => {
    const coinListArray = [...serachCoinList, ...serachCoinData];

    const ids = coinListArray.map(({ market }) => market);
    const deDuplicate = coinListArray.filter(
      ({ market }, index) => !ids.includes(market, index + 1)
    );

    setSearchCoinList(deDuplicate);
  };

  return (
    <CoinListContext.Provider
      value={{
        coinList,
        setCoinList,
        serachCoinList,
        setSearchListDeduplicate,
      }}
    >
      {children}
    </CoinListContext.Provider>
  );
};
