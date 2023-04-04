import 'bootswatch/dist/superhero/bootstrap.min.css';
import './style/AllTheBooks.scss'
import './style/SingleBook.scss'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
