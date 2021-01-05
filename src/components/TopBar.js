import React from "react";
import bars from './assets/bars-solid.png';
import {Button,AppBar,Toolbar,IconButton,Typography,Drawer} from '@material-ui/core';
import logo from './assets/logo.png'
import zIndex from "@material-ui/core/styles/zIndex";
const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#fff",
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    zIndex:100
  };
  return (
    <div style={topBarStyle}>
      {/* <span>{`😺️`}</span> */}
      <span>
        {/* <Button>
          <img src={bars} className="Menu-bar" alt="menu bar"/>
        </Button> */}
      </span>
      <img src={logo} className="Menu-bar" alt="logo"/>
      <span>
      </span>
      {/* <span>{`⚙️`}</span> */}
    </div>
  );
};

export default TopBar;