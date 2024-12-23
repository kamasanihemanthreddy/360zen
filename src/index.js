import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppNavbar from './components/Navbar'
import About from './components/about'
import Footer from './components/footer';
import ContactUs from './components/contactus';
import RecentWorks from './components/recentworks'
import WeOffer from './components/weoffer'
import Portfolio from './components/portfolio';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppNavbar />
    <App />
    <About/>
    <Portfolio/>
    <WeOffer />
    <RecentWorks/>
    <ContactUs />
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
