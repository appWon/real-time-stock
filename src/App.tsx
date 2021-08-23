import React, { FC } from 'react';
import GlobalStyle from './style/GlobalStyle';

import StockList from './pages/stockList';

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <StockList></StockList>
    </div>
  );
};

export default App;
