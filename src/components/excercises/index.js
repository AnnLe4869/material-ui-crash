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
    <Grid container justify="space-around">
      <Grid item xs={5}>
        <LeftPane className={classes.pane} style={{ border: "red solid 3px" }} />
      </Grid>
      <Grid item xs={5}>
        <RightPane className={classes.pane} />
      </Grid>
    </Grid>
  );
}
