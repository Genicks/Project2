import Level from "./Level";
import "./levels.css"

const Levels = (props) => {

  return (
    <div className="levelsSection">
        <h5>Levels</h5>
        <Level Level={11}></Level>
        <Level Level={10}></Level>
        <Level Level={9}></Level>
        <Level Level={8}></Level>
        <Level Level={7}></Level>
    </div>
    );
};
export default Levels;