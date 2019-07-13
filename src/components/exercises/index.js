import React from "react";
import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  pane: {
    padding: theme.spacing(2),
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  titleText: {
    textTransform: "capitalize"
  },
  welcomeText: {
    marginTop: 10
  }
}));
export default function Index({ exercises }) {
  const classes = useStyles();

  return (
    <Grid container justify="space-around">
      <Grid item xs={5}>
        <Paper className={classes.pane}>
          {exercises.map(([group, exercises]) => (
            <React.Fragment>
              <Typography variant="h5" className={classes.titleText}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className={classes.pane}>
          <React.Fragment>
            <Typography variant="h5">Welcome!</Typography>
            <Typography variant="subtitle1" className={classes.welcomeText}>
              Please select an exercise from the list on the left
            </Typography>
          </React.Fragment>
        </Paper>
      </Grid>
    </Grid>
  );
}
