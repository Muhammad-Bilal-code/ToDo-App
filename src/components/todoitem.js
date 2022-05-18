import "./todoitem.css";
import { Button, Grid, styled, Paper } from "@mui/material";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ToDoItem(props) {
  let [sno, setSno] = useState(1);
  useEffect(() => setSno(sno++), [props.change]);
  return (
    <>
      <Grid container spacing={2} className="todo-item-prnt">
        <Grid item xs={0.5}>
          <Item>{sno}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{props.title}</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{props.desc}</Item>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="medium">
            Edit
          </Button>
          <Button variant="contained" size="medium" sx={{ mx: 1 }}>
            Delete
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ToDoItem;
