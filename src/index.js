import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import "./index.css"
import React, { Component } from "react"
import ReactDom from "react-dom"
import { MessageList, Layout, ChatList } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Сообщения</h1>
                <MessageList />
            </div>
        )
    }
}

const dark = {
    color: "red",
}

const theme = createMuiTheme(dark)

ReactDom.render(
    <ThemeProvider theme={theme}>
        <Layout messages={<App />} />
        <ChatList />
    </ThemeProvider>,
    document.getElementById('root')
);
