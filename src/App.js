// import logo from './logo.svg';
import "./App.css";
import Form from "./components/form";
import Todos from "./components/todos";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});
  const handleGetFormData = (formData) => {
    setFormData({ id: Math.random(), ...formData });

    // console.log("from app file", formData);
  };

  return (
    <>
      <Form handleGetFormData={handleGetFormData} />
      <Todos formData={formData} />
    </>
  );
}

export default App;
