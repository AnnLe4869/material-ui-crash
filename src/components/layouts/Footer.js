import React from "react";
import uuid from "uuid/v1";
import { Tabs, Tab, Paper } from "@material-ui/core";

export default function Footer({ muscles, category, onSelect }) {
  // Note the use of short-hand if-else instead of real and long if-else
  const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

  //Even when you want to pass data to function, still use short-hand if-else instead of long way if-else
  function onIndexSelect(event, index) {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  }

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
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
