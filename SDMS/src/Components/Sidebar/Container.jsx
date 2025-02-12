import "./container.css";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import Levels from "./Levels/Levels";

const Container = (props) => {
  return (
    <div className="sideBar">
      <button
        className="login-button"
        onClick={() => {
          console.log("You clicked on the Login Button");
        }}
      >
        <IoPersonCircle className="icon" />
        Login
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
        }}
      >
        <IoSettings className="icon set" />
        Settings
      </button>
    </div>
  );
};
export default Container;
