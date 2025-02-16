import "./AddClass.css";
import { useState } from "react";

const Addclass = ({ active, setActive }) => {

  const [selected, setSelected] = useState(7);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="add-container">
      <form className="form" id="addForm" /*onSubmit={handleLogin}*/>
        <h2>Add Class</h2>
        <input
          type="text"
          placeholder="Class Name"
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />

        <select required className="dropDowns" id="gradeOpt" value={selected} onChange={handleChange}>
          <option value="" disabled>
            Select a grade
          </option>
          <option value={7}>Grade 7</option>
          <option value={8}>Grade 8</option>
          <option value={9}>Grade 9</option>
          <option value={10}>Grade 10</option>
          <option value={11}>Grade 11</option>
        </select>
        <div className="buttonCon">
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => {
              setActive(!active);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default Addclass;
