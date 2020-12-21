import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  header: {
    background: "white",
  },
  type: {
    color: "black",
    paddingRight: "1rem",
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="transparent"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Menu>
              <MenuItem onClick={handleclose}>Home</MenuItem>
          </Menu>
          <Typography className={classes.type} variant="h8" color="inherit">
            <img
              className="nasa-logo"
              src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
              style={{ width: "110px", height: "55px" }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
