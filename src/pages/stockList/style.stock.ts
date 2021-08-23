import styled from 'styled-components';
import Chart from 'react-apexcharts';

export const StockListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StockItem = styled.div`
  position: relative;
  border-radius: 15px;
  border: 1px solid black;

  .stockInfo {
    position: absolute;
    top: 10px;
    left: 10px;

    .stockName {
      font-size: 15px;
      margin-bottom: 5px;
    }
    .stockPrice {
      font-size: 20px;
    }
  }
`;

export const MiniChart = styled(Chart)`
  transform: translate(0, 15px) !important;
`;
