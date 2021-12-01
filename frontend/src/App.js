import "./App.css";
import CalendarPage from "./pages/CalendarPage";
import DiaryWritePage from "./pages/DiaryWritePage";
import DiaryPage from "./pages/DiaryPage";
import LoginPage from "./pages/LoginPage"
import React from "react";
import store from "./redux/store";
import {Provider} from "react-redux";
import FirstPage from "./FirstPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/calendar" element={<CalendarPage />} />
          <Route exact path="/diary-write" element={<DiaryWritePage />} />
          <Route exact path="/diary/:date" element={<DiaryPage />} />
          <Route exact path="/login" element={<LoginPage  />} />
          <Route exact path="/" element={<FirstPage  />} />
          {/* <Route path="/" element={<Navigate to="/calendar" />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;


