import React from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab label="Item 1" />
        <Tab label="Item 2" />
        <Tab label="Item 3" />
      </Tabs>
    </Paper>
  );
}
