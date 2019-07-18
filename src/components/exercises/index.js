import React from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";

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
  editMode,
  muscles,
  exercise: {
    muscles: muscle,
    title = "Welcome!", //default value, used for initial state
    description = "Please select an exercise from the list on the left"
  },
  onSelect,
  onDelete,
  onSelectEdit,
  onEdit
}) {
  const classes = useStyles();

  return (
    <Grid container justify="space-around">
      <Grid item xs={5}>
        <Paper className={classes.pane}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography variant="h5" className={classes.titleText}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem button onClick={() => onSelect(id)} key={id}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
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
          {editMode ? (
            <Form
              muscles={muscles}
              onSubmit={onEdit}
              exercise={{ title, muscle, description }}
            />
          ) : (
            <React.Fragment>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="subtitle1" className={classes.welcomeText}>
                {description}
              </Typography>
            </React.Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
