import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RepoPage from "./Components/RepoPage/RepoPage";
import SignInPage from "./Components/SignInPage/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/Repository" element={<RepoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
