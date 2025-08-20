import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./index.tsx";
import Signup from "./signup.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
