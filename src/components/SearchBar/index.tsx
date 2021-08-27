import React, { FC, useContext, useEffect, useState } from 'react';
import { CoinListContext } from '@/lib/contexts/CoinList';
import { useCoinListQuery } from '@/lib/hooks';
import { AutoComplete } from 'antd';
import { useDebounce } from '@/lib/hooks';
import { api } from '@/lib/api';

const SearchBar: FC = () => {
  //context에 저장된 전체 코인 리스트
  const { coinList, setSearchListDeduplicate } = useContext(CoinListContext);
  //AntD AutoComplete 리스트 데이터
  const [options, setOptions] = useState<{ value: string }[]>([]);
  //전체 코인 리스트에서 keyword 기준 필터
  const [query, setKeyword] = useCoinListQuery(coinList);
  //debounce 후 api 호출
  const debounceQuery = useDebounce(query, 500);

  const handleSearchKeyword = (keyword: string) => setKeyword(keyword);

  const handleSelectCoin = async (selectCoin: string) => {
    if (selectCoin.trim() === '') return;

    const { data } = await api.get(`/ticker?markets=${selectCoin}`);
    setSearchListDeduplicate(data);
  };

  useEffect(() => {
    setOptions(debounceQuery);
  }, [debounceQuery]);

  return (
    <div>
      <AutoComplete
        options={options}
        style={{ width: 1000 }}
        onSelect={handleSelectCoin}
        onSearch={handleSearchKeyword}
        placeholder="코인을 입력해 주세요"
      />
    </div>
  );
};

export default SearchBar;
