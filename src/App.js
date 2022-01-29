import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./UserPost";
import CreatePost from "./UserPost/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
