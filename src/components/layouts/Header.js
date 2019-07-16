import React from "react";
import CreateDialog from "../exercises/dialogs/Create";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logButton: {
    margin: theme.spacing(1)
  }
}));

export function Header({ muscles, onExerciseCreate }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <CreateDialog categories={muscles} onCreate={onExerciseCreate} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
