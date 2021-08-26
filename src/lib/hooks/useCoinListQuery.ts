import { useState, SetStateAction, Dispatch, useEffect } from 'react';
import { Coin } from '@/lib/contexts/CoinList';

interface Query {
  value: string;
}

type UseCoinList = [Query[], Dispatch<SetStateAction<string>>];

const useCoinListQuery = (coinList: Coin[]): UseCoinList => {
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState<Query[]>([]);

  useEffect(() => {
    handleDebounce();
  }, [keyword]);

  const handleDebounce = () => {
    if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(keyword)) {
      const koreanKeywordList = coinList.reduce(
        (prev: Query[], coin: Coin): Query[] => {
          if (coin.korean_name.includes(keyword.trim())) {
            prev.push({ value: coin.market });
          }
          return prev;
        },
        []
      );
      setQuery(koreanKeywordList);
    }
  };

  return [query, setKeyword];
};

export default useCoinListQuery;
