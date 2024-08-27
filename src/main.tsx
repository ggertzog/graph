import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app/App.tsx';
import './index.scss';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)