import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElemen = document.getElementById('root');
const root = createRoot(rootElemen);

root.render(
<App />
);
