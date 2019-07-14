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

// Note how destructure syntax is used here and how default value is set so to avoid an initial stage
export default function Index({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!", //default value, used for initial state
    description = "Please select an exercise from the list on the left"
  }
}) {
  const classes = useStyles();

  return (
    <Grid container justify="space-around">
      <Grid item xs={5}>
        <Paper className={classes.pane}>
          {exercises.map((
            [group, exercises] // Note destructure array here
          ) =>
            // A short-hand if-else here.
            // So if group is match category then display, else don't display
            // By this way if category change, which caused by footer action, this list also change accordingly
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography variant="h5" className={classes.titleText}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem button onClick={() => onSelect(id)} key={id}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </React.Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper className={classes.pane}>
          <React.Fragment>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle1" className={classes.welcomeText}>
              {description}
            </Typography>
          </React.Fragment>
        </Paper>
      </Grid>
    </Grid>
  );
}
