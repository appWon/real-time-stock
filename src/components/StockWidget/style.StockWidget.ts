import styled from 'styled-components';
import Chart from 'react-apexcharts';

export const StockItem = styled.div`
  position: relative;
  border-radius: 15px;
  border: 1px solid black;
  margin: 10px;

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

    .up {
      background-color: rgb(255, 0, 0, 0.4);
    }

    .down {
      background-color: rgb(0, 0, 255, 0.4);
    }
  }
`;

export const MiniChart = styled(Chart)`
  transform: translate(0, 15px) !important;
`;
