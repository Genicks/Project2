import "./settings.css";
import { IoMdClose } from "react-icons/io";

const Settings = ({ active, setActive }) => {
  return (
    <div className="Settings-Container">
      <div className="Menu">
        <button
          onClick={() => {
            setActive(false);
          }}
          className="exit"
        >
          <IoMdClose />
          <span id="Menu-Heading"> Settings Menu</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
