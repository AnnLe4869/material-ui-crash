import React, { useState } from "react";
import {
  Button,
  Dialog,
  Fab,
  DialogContent,
  DialogActions,
  DialogTitle,
  DialogContentText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function Create() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }
  function handleClickOpen() {
    setOpen(true);
  }

  return (
    <React.Fragment>
      <Fab color="primary" onClick={handleClickOpen} size="small">
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
