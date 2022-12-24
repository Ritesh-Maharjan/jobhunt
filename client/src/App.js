import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Signup from "./page/Signup";

function App() {
  return (
    <div  className="font-mono">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
