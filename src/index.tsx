import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainRoutes } from './routes/router'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter } from 'react-router-dom';

const GLobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
}
h1,h2,h3,h4,span,p,button {
  font-family: Montserrat
}
button:hover{
  cursor:pointer
}
h1,h2,h3,h4,span,p:hover{
  cursor:default
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GLobalStyle />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);


