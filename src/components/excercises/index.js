import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
const useStyles = makeStyles(theme => ({
  pane: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center"
  }
}));
export default function Index() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs>
        <LeftPane className={classes.pane} />
      </Grid>
      <Grid item xs>
        <RightPane className={classes.pane} />
      </Grid>
    </Grid>
  );
}
