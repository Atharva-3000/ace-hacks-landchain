import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import TransferOwnership from "./components/TransferOwnership";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/transfer-ownership" element={<TransferOwnership/>} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
