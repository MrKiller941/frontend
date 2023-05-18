import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { buildProvider } from './redux/api';
import './index.css'
import CLogPage from './view/pages/CLogPage/CLogPage.js';
import CRegPage from './view/pages/CRegPage/CRegPage.js';
import CCatalogPage from './view/pages/CCatalogPage/CCatalogPage';
import CAddProdPage from './view/pages/CAddProdPage/CAddProdPage';
import CDeleteProdPage from './view/pages/CDeleteProdPage/CDeleteProdPage';

const Provider = buildProvider();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <Router>
      <Routes>
        <Route path='/' element={<CLogPage/>}/>
        <Route path='/register' element={<CRegPage/>}/>
        <Route path='/catalog' element={<CCatalogPage/>}/>
        <Route path='/products/add' element={<CAddProdPage/>}/>
        <Route path='/products/delete' element={<CDeleteProdPage/>}/>
      </Routes>
    </Router>
  </Provider>
);