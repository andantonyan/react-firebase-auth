import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {initializeApp} from 'firebase/app';

(async function () {
    const configRes = await fetch('/config.json');
    const config = await configRes.json();

    initializeApp(config.firebase);

    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    );

    reportWebVitals();
})();
