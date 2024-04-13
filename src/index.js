import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/markazi-text';
import '@fontsource/karla';

const theme = extendTheme({
  colors:{
    primary_green: '#495E57',
    primary_yellow : '#F4CE14',
    secondary_grey : '#EDEFEE',
    secondary_black : '#333333'
  },
  fonts: {
    heading: `'Markazi Text', serif`,
    body: `'Karla', sans-serif`,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ChakraProvider theme={ theme }>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
