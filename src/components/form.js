import "./form.css";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { Grid, styled, Paper, Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Form(props) {
  const [input, setInput] = useState({ title: "", desc: "" });
  const handleChangeInput = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // console.log(input);
  // const [title, setTitle] = useState("");
  // const handleChangeTitle = (e) => {
  //   setTitle(e.target.value);
  // };
  // console.log(title);

  // const [desc, setDesc] = useState("");
  // const handleChangeDesc = (e) => {
  //   setDesc(e.target.value);
  // };
  // console.log(desc);

  return (
    <Grid container spacing={2} class="form-prnt">
      <Grid item xs={1.5} sx={{ mx: 2 }}>
        <TextField
          id="standard-basic"
          label="Title"
          variant="outlined"
          value={input.title}
          name="title"
          onChange={handleChangeInput}
        />
      </Grid>
      <Grid item xs={1.5} sx={{ mx: 2 }}>
        <TextField
          id="standard-basic"
          label="Desc"
          variant="outlined"
          value={input.desc}
          name="desc"
          onChange={handleChangeInput}
        />
      </Grid>
      <Grid item xs={1} sx={{ mx: 2 }}>
        <Button
          variant="contained"
          size="medium"
          onClick={() => props.handleGetFormData(input)}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
}

export default Form;
