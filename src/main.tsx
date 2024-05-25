import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Perfect Scrollbar
import "react-perfect-scrollbar/dist/css/styles.css";




import { BrowserRouter as Router } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./store/store.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>

         <Router>

            <App />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
