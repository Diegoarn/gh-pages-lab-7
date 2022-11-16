import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RickPage } from "./rick-list/app-rick";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RickPage />} />
      </Routes>
    </BrowserRouter>
  );
};
