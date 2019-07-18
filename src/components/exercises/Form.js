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
export default function Form({ onSubmit, muscles, exercise }) {
  const classes = useStyles();
  const [state, setState] = useState(getInit());
  console.log(state);

  function getInit() {
    return exercise ? exercise : { title: "", description: "", muscles: "" };
  }
  function handleChange(name) {
    return function({ target: { value } }) {
      setState({ ...state, [name]: value });
    };
  }
  function handleSubmit(event) {
    // TODO: validate the form
    onSubmit({
      ...state,
      id: state.title.toLocaleLowerCase().replace(/ /g, "-")
    });
    setState({
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
        value={state.title}
        onChange={handleChange("title")}
      />
      <FormControl className={classes.dialogFormControl}>
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
        className={classes.dialogFormControl}
        multiline
        rows={4}
        fullWidth
        value={state.description}
        onChange={handleChange("description")}
      />
      <Button onClick={handleSubmit} color="primary" variant="contained">
        Create
      </Button>
    </form>
  );
}
