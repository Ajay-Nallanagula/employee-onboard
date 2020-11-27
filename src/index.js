import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MuiThemeProvider } from "@material-ui/core/styles";
import IncutTheme from "./controls/themes/IncutTheme";
import IncutProvider from "./context/IncutProvider";
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(
  <MuiThemeProvider theme={IncutTheme}>
    <IncutProvider>
      <Router>
        <App />
      </Router>
    </IncutProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
