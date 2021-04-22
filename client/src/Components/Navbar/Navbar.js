import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Nav_Image from "./Nav_Image";
import Nav_Menu from "./Nav_Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "50px",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    justifyContent: "center",
    color: "White",
    fontSize: "25px",
  },
  button: {
    fontSize: "13px",
    textDecoration: "none",
    backgroundColor: "#f3f3f3",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Nav_Menu />
          </IconButton>

          <Link to="/">
            <Nav_Image />
          </Link>

          <Typography variant="h6" className={classes.title}>
            LUFF-DOCS
          </Typography>

          <Button className={classes.button} color="inherit">
            <a href="/">New Document +</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
