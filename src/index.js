import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./reducer/index";
import token from "./components/token";
import "./styles/styles.css";

ReactDOM.render(
    <ThemeProvider theme={token}>
        <StoreProvider>
            <App />
        </StoreProvider>
    </ThemeProvider>,
    document.getElementById("root"),
);

serviceWorker.register();
