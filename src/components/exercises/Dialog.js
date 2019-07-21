import React, { useState } from "react";
import {
  Dialog,
  Fab,
  DialogContent,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";
import { Consumer } from "../../context";

export default function CreateDialog({ onCreate }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Consumer>
      {({ muscles, onCreate }) => (
        <React.Fragment>
          <Fab color="secondary" onClick={handleClick} size="small">
            <AddIcon />
          </Fab>
          <Dialog open={open} onClose={handleClick} maxWidth="sm" fullWidth>
            <DialogTitle>Create a new exercise</DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill out the form below</DialogContentText>
              <Form
                muscles={muscles}
                onSubmit={exercise => {
                  onCreate(exercise);
                  handleClick();
                }}
              />
            </DialogContent>
          </Dialog>
        </React.Fragment>
      )}
    </Consumer>
  );
}
