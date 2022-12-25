import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Detail from "./page/Detail";
import Homepage from "./page/Homepage";
import Login from "./page/Login";
import NotFound from "./page/NotFound";
import Signup from "./page/Signup";

function App() {
  return (
    <div  className="font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job/:id" element={<Detail />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
