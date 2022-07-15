import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sidebar from './components/sidebar/Sidebar';
import Headbar from './components/headbar/Headbar';
import MainCard from './components/maincard/MainCard';
import SideCard from './components/sidecard/SideCard';
import SubCard from './components/subcard/SubCard';
import RelasiCard from './components/relasicard/RelasiCard';
import AktivitasCard from './components/aktivitascard/AktivitasCard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Headbar />
    <MainCard />
    <SideCard />
    <SubCard />
    <RelasiCard />
    <AktivitasCard />
  </React.StrictMode>
);

