import React from "react";
import SubmitForm from "./pages/SubmitForm";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <React.Fragment>
      <SubmitForm />
      <Toaster position="top-right" reverseOrder={false} />
    </React.Fragment>
  );
};

export default App;
