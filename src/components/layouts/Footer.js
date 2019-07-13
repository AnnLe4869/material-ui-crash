import React from "react";
import uuid from "uuid/v1";
import { Tabs, Tab, Paper } from "@material-ui/core";

export default function Footer({ muscles }) {
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
        indicatorColor="secondary"
        centered
      >
        <Tab label="All" key={uuid()} />
        {muscles.map(group => (
          <Tab key={uuid()} label={group} />
        ))}
      </Tabs>
    </Paper>
  );
}
