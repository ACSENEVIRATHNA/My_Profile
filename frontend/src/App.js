import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<MainPage />} />{" "}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
