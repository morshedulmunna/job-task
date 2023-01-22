import React from "react";
import SubmitForm from "./pages/SubmitForm";
import { Toaster } from "react-hot-toast";
import ResultSHow from "./pages/ResultSHow";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<SubmitForm />} />
        <Route path="/result-show" element={<ResultSHow />} />
      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </React.Fragment>
  );
};

export default App;
