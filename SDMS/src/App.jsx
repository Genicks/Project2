import "./Components/Sidebar/Sidebar";
import SideBar from "./Components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import { AiFillWarning } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="warning">
        <div className="warning-Content">
            <AiFillWarning className="Img-1"/>
            <span className="Message">Sorry this website only supports Wider Screen Sizes</span>
        </div>
      </div>

      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/dashboard" element={<SideBar />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
