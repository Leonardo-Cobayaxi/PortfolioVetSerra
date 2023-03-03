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
body {
  background-color: #FBFBF2;
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
.line {
  display: flex;
  margin-left: 10vw;
  border: solid rgba(0, 0, 0, 0.103);
  border-width: 0.01px;
  margin-top: 6rem;
  margin-bottom: 7rem;
  width: 80vw;
}
.modalImg {
    animation-name: zoom;
    animation-duration: 0.35s;
}

@keyframes zoom {
    from {
        transform: scale(0)
    }

    to {
        transform: scale(1)
    }
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


