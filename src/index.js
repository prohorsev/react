import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import "./index.css"
import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ChatPage } from "./pages"
import { ProfilePage } from "./pages/profile";

const dark = {
    color: "red",
}

const theme = createMuiTheme(dark)

ReactDom.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Switch>
                <Route path="/chat" component={(params) => <ChatPage {...params} />} />
                <Route path="/profile" component={() => <ProfilePage/>} />
                <Route path="*" component={() => <h1>404</h1>} />
            </Switch>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
