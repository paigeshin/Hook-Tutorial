import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  console.log("Component E rendered");

  return <div>{`${user} - ${channel}`}</div>;
};

export default ComponentE;
