import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  dialogFormControl: {
    margin: theme.spacing(1),
    minWidth: 200
  }
}));
export default function Form({ onSubmit, muscles }) {
  const classes = useStyles();
  const [exercise, setExercise] = useState({
    title: "",
    description: "",
    muscles: ""
  });

  function handleChange(name) {
    return function({ target: { value } }) {
      setExercise({ ...exercise, [name]: value });
    };
  }
  function handleSubmit(event) {
    // TODO: validate the form
    onSubmit({ ...exercise, id: exercise.title.toLocaleLowerCase().replace(/ /g, "-") });
    setExercise({
      title: "",
      description: "",
      muscles: ""
    });
  }

  return (
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
          {muscles.map(category => (
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
      <Button onClick={handleSubmit} color="primary" variant="contained">
        Create
      </Button>
    </form>
  );
}
