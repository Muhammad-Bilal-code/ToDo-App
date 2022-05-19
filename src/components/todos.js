import "./todos.css";
import { useEffect, useState } from "react";
import ToDoItem from "./todoitem";
import ToDoItemHeading from "./todoitemheading";
import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Button from "@mui/material/Button";

function Todos(props) {
  const [formDataArr, setFormDataArr] = useState([]);
  const handleSetFormDataArr = () => {
    !props.formData.title || !props.formData.desc
      ? setFormDataArr([...formDataArr])
      : setFormDataArr([...formDataArr, props.formData]);
  };
  useEffect(() => {
    handleSetFormDataArr();
  }, [props.formData]);
  console.log(formDataArr);

  const handleClearAll = () => {
    setFormDataArr([]);
  };

  return (
    <div className="todos-prnt">
      <h2>ToDo List</h2>
      <ToDoItemHeading />
      {formDataArr.map((v, i) => (
        <ToDoItem title={v.title} desc={v.desc} change={props.formData} />
      ))}
      <Button variant="contained" color="success" onClick={handleClearAll}>
        Clear All
      </Button>
    </div>
  );
}

export default Todos;
