import React, { FC } from 'react';
import * as S from './style.stock';
import { ApexOptions } from 'apexcharts';

const StockList: FC = () => {
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

  const mockData = {
    series: [
      {
        data: [1, 5, 2, 34, , 6, 6, 1, 2, 34, 3, 4, 2, 4],
      },
    ],
  };

  return (
    <S.StockListContainer>
      <S.StockItem>
        <div className="stockInfo">
          <h1 className="stockName">Apple</h1>
          <span className="stockPrice">1.17221</span>
        </div>
        <S.MiniChart
          type="line"
          width={300}
          height={150}
          options={options}
          series={mockData.series}
        />
      </S.StockItem>
    </S.StockListContainer>
  );
};

export default StockList;
