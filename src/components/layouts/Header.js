import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
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

export function Header() {
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
          <Button className={classes.logButton} variant="contained" color="inherit">
            Login
          </Button>
          <Button className={classes.logButton} variant="contained" color="secondary">
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;