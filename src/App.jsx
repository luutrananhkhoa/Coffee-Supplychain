import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./UI/Home/Home";
import Login from "./UI/Login/Login";
import Error from "./UI/Error/Error";
import QRCode from "./UI/QRCode/QRCode";
import User from "./UI/User/User";
import Product from "./UI/Product/Product";
import configureStore from "./Redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/qrcode" element={<QRCode />} />
          <Route path="/user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
