import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sidebar from './components/sidebar/Sidebar';
import Headbar from './components/headbar/Headbar';
import MainCard from './components/maincard/MainCard';
import SideCard from './components/sidecard/SideCard';
import SubCard from './components/subcard/SubCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Headbar />
    <MainCard />
    <SideCard />
    <SubCard />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
