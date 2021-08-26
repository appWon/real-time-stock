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
  setSearchCoinList: Dispatch<SetStateAction<Coin[]>>;
}

export const CoinListContext = React.createContext<CoinListContextValue>({
  coinList: [],
  serachCoinList: [],
  setCoinList: () => [],
  setSearchCoinList: () => [],
});

export const CoinListStore: FC = ({ children }) => {
  const [coinList, setCoinList] = useState<Coin[]>([]);
  const [serachCoinList, setSearchCoinList] = useState<Coin[]>([]);

  return (
    <CoinListContext.Provider
      value={{ coinList, setCoinList, serachCoinList, setSearchCoinList }}
    >
      {children}
    </CoinListContext.Provider>
  );
};
