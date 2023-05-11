import React from 'react';
import {Routes, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar,Homepage, CryptoCurrencies, CryptoDetails } from './components';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
              <Routes>
              <Route exact path="/" element= { <Homepage />}/>
              <Route exact path="/cryptocurrencies" element= { <CryptoCurrencies />}/>
              <Route exact path="/crypto/:coinId" element= { <CryptoDetails />}/>
            </Routes>
            
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{ color: "white", textAlign:'center'}}>
          CryptoKarma by Anish <br/>
          All rights reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App