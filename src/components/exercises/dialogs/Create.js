import React, { useState } from "react";
import {
  Button,
  Dialog,
  Fab,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  makeStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  dialogFormControl: {
    margin: theme.spacing(1),
    minWidth: 200
  }
}));

export default function Create({ categories, onCreate }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscles: ""
  });

  function handleClick() {
    setOpen(!open);
  }
  function handleChange(name) {
    return function({ target: { value } }) {
      setExercise({ ...exercise, [name]: value });
    };
  }
  function handleSubmit(event) {
    // TODO: validate the form
    onCreate({ ...exercise, id: exercise.title.toLocaleLowerCase().replace(/ /g, "-") });
    setOpen(!open);
    setExercise({
      title: "",
      description: "",
      muscles: ""
    });
  }

  return (
    <React.Fragment>
      <Fab color="primary" onClick={handleClick} size="small">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle>Create a new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form>
            <TextField
              label="Title"
              className={classes.dialogFormControl}
              value={exercise.title}
              onChange={handleChange("title")}
            />
            <FormControl className={classes.dialogFormControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select value={exercise.muscles} onChange={handleChange("muscles")}>
                {categories.map(category => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              className={classes.dialogFormControl}
              multiline
              rows={4}
              fullWidth
              value={exercise.description}
              onChange={handleChange("description")}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
