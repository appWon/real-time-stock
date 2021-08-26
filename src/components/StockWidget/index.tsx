import React, { FC, useState, memo, useEffect } from 'react';
import * as S from './style.StockWidget';
import { ApexOptions } from 'apexcharts';

//Chart 옵션 타입
const options: ApexOptions = {
  chart: {
    type: 'line',
    height: 10,
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'linear',
      speed: 800,
    },
  },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: {
    show: false,
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
};

interface StockWidgetProps {
  market: string;
  trade_price: number;
}

const StockWidget: FC<StockWidgetProps> = (props: any) => {
  const [price, setPrice] = useState(0);
  const [candleList, setCandleList] = useState<number[]>([]);
  const [priceState, setPriceState] = useState<'up' | 'down' | ''>('');

  useEffect(() => {
    const { trade_price } = props;

    if (price && price > trade_price) {
      //주가 하락
      setPriceState('down');
      setTimeout(() => {
        setPriceState('');
      }, 500);
    }

    if (price && price < trade_price) {
      //주가 상승
      setPriceState('up');
      setTimeout(() => {
        setPriceState('');
      }, 500);
    }

    setPrice(trade_price);
    setCandleList([...candleList, trade_price]);
  }, [props]);

  return (
    <S.StockItem>
      <div className="stockInfo">
        <h1 className="stockName">{props.market}</h1>
        <span className={`stockPrice ${priceState}`}>{props.trade_price}</span>
      </div>
      <S.MiniChart
        type="line"
        width={300}
        height={150}
        options={options}
        series={[{ data: candleList }]}
      />
    </S.StockItem>
  );
};

export default memo(StockWidget);
