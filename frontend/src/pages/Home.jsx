import React from "react";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <header className="App-header">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="text-3xl font-bold text-white">Hello world!</h1>
    </header>
  );
}
