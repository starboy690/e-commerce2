import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./index.tsx";
import Signup from "./signup.tsx";
import Deals from "./Deals.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/deals" element={<Deals />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
