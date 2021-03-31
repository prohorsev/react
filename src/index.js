import "./index.css"
import React from "react"
import ReactDom from "react-dom"
import { MessageField } from './components/MessageField.js';

ReactDom.render(
    <MessageField />,
    document.getElementById('root')
);
