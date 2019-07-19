import React, { useState, useEffect } from "react";
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
  formControlField: {
    margin: theme.spacing(1),
    minWidth: theme.breakpoints.down("sm") ? 100 : 300 // Use number, not number in string form
  },
  formButton: {
    margin: theme.spacing(1),
    float: "right"
  }
}));
export default function Form({ onSubmit, muscles, exercise }) {
  const classes = useStyles();
  const [state, setState] = useState(getInitialState());

  function getInitialState() {
    return exercise ? exercise : { title: "", description: "", muscles: "" };
  }
  useEffect(() => setState(getInitialState()), [exercise]);

  function handleChange(name) {
    return function({ target: { value } }) {
      setState({ ...state, [name]: value });
    };
  }
  function handleSubmit(event) {
    // TODO: validate the form
    onSubmit({
      id: state.title.toLocaleLowerCase().replace(/ /g, "-"),
      ...state
    });
    setState(getInitialState());
  }

  return (
    <form>
      <TextField
        label="Title"
        className={classes.formControlField}
        value={state.title}
        onChange={handleChange("title")}
      />
      <FormControl className={classes.formControlField}>
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select value={state.muscles} onChange={handleChange("muscles")}>
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
        className={classes.formControlField}
        multiline
        rows={4}
        fullWidth
        value={state.description}
        onChange={handleChange("description")}
      />

      <Button
        className={classes.formButton}
        onClick={handleSubmit}
        color="primary"
        variant="contained"
      >
        {exercise ? "Edit" : "Create"}
      </Button>
    </form>
  );
}
