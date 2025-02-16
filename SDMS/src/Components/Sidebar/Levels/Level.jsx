import { useState, useEffect } from "react";
import "./level.css";
import { MdDelete } from "react-icons/md";

const Level = (props) => {
  const [level, setLevel] = useState(props.Level || 0);
  const [isActive, setIsActive] = useState(false);
  const [allClasses, setAllClasses] = useState([]);
  const [gradeClasses, setGradeClasses] = useState([]);

  useEffect(() => {
    setAllClasses([
      { grade: 11, classes: ["TVET", "SCIENCE", "ARTS", "BUSINESS"] },
      { grade: 10, classes: ["TVET", "SCIENCE", "ARTS", "BUSINESS"] },
      { grade: 9, classes: ["A-Class", "B-Class", "C-Class", "D-Class"] },
      { grade: 8, classes: ["A-Class", "B-Class", "C-Class", "D-Class"] },
      { grade: 7, classes: ["A-Class", "B-Class", "C-Class", "D-Class"] },
    ]);
  }, []);

  const deleteClass = (classToRemove) => {
    setGradeClasses((prevItems) =>
      prevItems.filter((Class) => Class !== classToRemove)
    );
  };

  useEffect(() => {
    if (allClasses.length > 0) {
      const selectedClass = allClasses.find(
        (item) => item.grade === props.Level
      );
      if (selectedClass) setGradeClasses(selectedClass.classes);
    }
  }, [allClasses, props.Level]);

  useEffect(() => {
    setLevel(props.Level);
  }, [props.Level]);

  return (
    <>
      <div
        className={`level ${isActive ? "active" : ""}`}
        onClick={() => {
          setIsActive(!isActive);
          console.log(`You clicked on Grade ${level} Section`);
        }}
      >
        <h6>Grade {level}</h6>
        <div className="Classes">
          {Array.isArray(gradeClasses) &&
            gradeClasses.map((Class, index) => (
              <div
                className={`level`}
                onClick={() => {
                  console.log(`You clicked on ${Class} Class`);
                }}
                key={index}
              >
                <h6>
                  {Class}{" "}
                  <MdDelete
                    onClick={() => {
                      if (window.confirm(`Delete ${Class} class?`)) {
                        deleteClass(Class);
                        console.log(`You deleted the ${Class} class`);
                      }
                    }}
                  />
                </h6>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Level;
