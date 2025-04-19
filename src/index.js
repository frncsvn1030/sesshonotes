import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// styles
import './styles/css/app.css'

// Import UIKit CSS
import 'uikit/dist/css/uikit.min.css';

// Import UIKit JS
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js'; // (optional) for icons



import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  )