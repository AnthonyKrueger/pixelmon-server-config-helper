import * as React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/nav';
import Home from './components/home';
import PricesIndex from './components/prices/pricesIndex';
import ShopkeepersIndex from './components/shopkeepers/shopkeepersIndex';

const drawerWidth = 200;

const fs = window.require('fs')
const pathModule = window.require('path')

const { app } = window.require("@electron/remote")


function App() {

  const [path, setPath] = React.useState(app.getAppPath())
  console.log(path)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="prices" element={<PricesIndex />} />
        <Route path="shopkeepers" element={<ShopkeepersIndex />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
