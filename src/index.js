import React from 'react';
import ReactDOM from 'react-dom/client';
import './themed-bootstrap.scss';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store/store';
import { BrowserRouter } from 'react-router-dom';
import { GamesContextProvider } from './componets/useAllGames';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
    <Provider store={store}>
        <GamesContextProvider>
            <App/>
        </GamesContextProvider>
    </Provider>
     </BrowserRouter>);
