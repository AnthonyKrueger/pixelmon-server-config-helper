import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import theme from './theme';

import Nav from './components/nav';
import Home from './components/home';
import PricesIndex from './components/prices/pricesIndex';
import ShopkeepersIndex from './components/shopkeepers/shopkeepersIndex';

const { app } = window.require("@electron/remote")


function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="prices" element={<PricesIndex />} />
            <Route path="shopkeepers" element={<ShopkeepersIndex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
