import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {DashboardOutlined, PoweroffOutlined } from '@ant-design/icons/lib/icons';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Login from './Login';
import AddProduct from "./AddProduct"

const Admin = () => {
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    if (key === 'SignOut') {
      // Perform sign out logic here
    } else {
      navigate(key);
    }
  };

  return (
    <>
    <h1 style={{textAlign:"center",marginTop:"30px"}}>EMart Admin </h1>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
     
      <Menu
        onClick={({ key }) => handleMenuClick(key)}
        
        items={[
          // { label: 'Home', key: '/', icon: <HomeOutlined /> },
          { label: 'All Products', key: '/products', icon: <DashboardOutlined /> },
          { label: 'ADD Product', key: '/addproduct', icon: <DashboardOutlined /> },
          { label: 'SignOut', key: '/login', icon: <PoweroffOutlined />, danger: true },
        ]}
      />

      <div>
        <Content />
      </div>
    </div>
    </>
  );
};

function Content() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default Admin;