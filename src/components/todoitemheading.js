import "./todoitem.css";
import { Button, Grid, styled, Paper } from "@mui/material";
import "./todoitemheading.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function ToDoItemHeading() {
  return (
    <>
      <Grid container spacing={2} className="todo-item-headinng-prnt">
        <Grid item xs={0.5}>
          <Item>S no</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Title</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>Desc</Item>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="medium">
            Call to Action
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ToDoItemHeading;
