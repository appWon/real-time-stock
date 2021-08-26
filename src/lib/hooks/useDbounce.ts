import Reat, { useEffect, useState } from 'react';

const useDebounce = <S>(value: S, delay: number): S => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 딜레이 이후 값을 업데이트한다.
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    // 딜레이 기간중에 value혹은 delay값이 업데이트 되었다면 이(cleanup)함수를 실행한다.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
