import "./container.css";
import { useNavigate } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import Levels from "./Levels/Levels";
import Settings from "../Settings/Settings";
import { useEffect, useState } from "react";
import Addclass from "../../Pages/AddClass/Addclass";

const Container = (props) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="sideBar">
        <button
          className="login-button"
          onClick={(e) => {
            e.preventDefault;
            navigate("/Login");
          }}
        >
          <IoPersonCircle className="icon" />
          Sign out
        </button>
        <select
          className="dropDowns"
          onClick={(e) => {
            console.log(`You Chose ${e.target.value}`);
          }}
        >
          <option value="DSS">Diamond Secondary</option>
          <option value="NGSS">North-Georgetown Secondary</option>
          <option value="CGSS">Convent-Garden Secondary</option>
        </select>
        <select
          className="dropDowns"
          onClick={(e) => {
            console.log(`You Chose ${e.target.value}`);
          }}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
        <button
          className="add-button"
          onClick={() => {
            console.log("You clicked on the Add-Class Button");
            setActive2(!active2)
          }}
        >
          <IoMdAddCircle className="icon" />
          Add Class
        </button>
        <Levels></Levels>
        <button
          className="setting-btn"
          onClick={() => {
            console.log("You clicked on the Settings Button");
            setActive1(!active1);
          }}
        >
          <IoSettings className="icon set" />
          Settings
        </button>
      </div>
      <div className={`Settings-Component ${active1 ? "active" : ""}`}>
        <Settings active={active1} setActive={setActive1} />
      </div>

      <div className={`Settings-Component ${active2 ? "active" : ""}`}>
        <Addclass active={active2} setActive={setActive2} />
      </div>
    </>
  );
};
export default Container;
