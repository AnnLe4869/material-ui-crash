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
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },

  pane: {
    padding: theme.spacing(2),
    overflowY: "auto",
    marginBottom: 10,
    // Add media query
    // Note the use of CSS function calc()
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 10px)",
      marginTop: 5
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      marginTop: 5
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
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
  exercise,
  exercise: {
    id,
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
    <Grid container justify="space-around" className={classes.container}>
      <Grid className={classes.item} item xs={12} sm={5}>
        <Paper className={classes.pane}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <React.Fragment key={group}>
                <Typography variant="h5" className={classes.titleText} color="secondary">
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem button onClick={() => onSelect(id)} key={id}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onSelectEdit(id)} color="primary">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(id)} color="primary">
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
      <Grid className={classes.item} item xs={12} sm={5}>
        <Paper className={classes.pane}>
          {editMode ? (
            <Form key={id} muscles={muscles} onSubmit={onEdit} exercise={exercise} />
          ) : (
            <React.Fragment>
              <Typography variant="h4" color="secondary">
                {title}
              </Typography>
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
