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

export default function CreateDialog({ muscles, onCreate }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
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
        </DialogContent>
        <Form
          muscles={muscles}
          onSubmit={() => {
            onCreate();
            handleClick();
          }}
        />
      </Dialog>
    </React.Fragment>
  );
}
