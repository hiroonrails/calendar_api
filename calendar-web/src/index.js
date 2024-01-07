import React from 'react';
// 'react-dom'; → 古いからやめましょうその代わり /client を使いましょうというルール。
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './routes/SignUp';
import Calendar from './routes/Calendar';

// ReactDOM.render()は古いのでやめましょう。 const root = ReactDom.createRoot(document.getElementById('root')); というのを使いましょうというルール。
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='signUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);

reportWebVitals();
