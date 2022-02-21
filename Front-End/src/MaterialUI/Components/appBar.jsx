import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SpectrumReachLogoAlt } from "../Shared/Logo/Logo";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  links: {
    flexGrow: 1,
  },
  linksContainer: {
    justifyContent: "flex-end",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  titleWrapper: {
    flexGrow: 1,
    maxWidth: "350px",
  },
  siteNameWrapper: {
    display: "inline-block",
    verticalAlign: "super",

    "& h5": {
      paddingLeft: theme.spacing(2),
      display: "inline-block",
      verticalAlign: "text-top",
    },
  },
  siteName: {
    borderLeft: "1px solid white",
    display: "block",
    marginLeft: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: "inherit",
    textAlign: "center",
    background: "inherit",
    cursor: "pointer",

    "& span:hover": {
      fontWeight: 600,
    },
  },
}));

export default function HeaderNavigation({ username }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [adminMenu, setAdminMenu] = useState(null);

  console.log("username: ", username);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickadmin = (event) => {
    setAdminMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAdminMenu(null);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <SpectrumReachLogoAlt />

          <Typography variant="h6" className={classes.titleWrapper}>
            <div className={classes.siteNameWrapper}>
              <NavLink to="/" className="text-light">
                <Typography className={classes.siteName} variant="h5">
                  User Access Review
                </Typography>
              </NavLink>
            </div>
          </Typography>

          <div className={classes.links}>
            <Grid className={classes.linksContainer} container spacing={1}>
              <Grid item s={2}>
                <Paper elevation={0} className={classes.paper}>
                  {/* <Typography variant="h7">Link 1</Typography> */}
                  <Button
                    aria-controls="admin-menu"
                    aria-haspopup="true"
                    onClick={handleClickadmin}
                    className="text-white"
                  >
                    ADMINISTRATIVE PORTAL
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="admin-menu"
                    anchorEl={adminMenu}
                    keepMounted
                    open={Boolean(adminMenu)}
                    onClose={handleClose}
                  >
                    <NavLink
                      to="TimAdminRequestsForChange"
                      className="remove-text-decoration"
                    >
                      <MenuItem onClick={handleClose}>Tim</MenuItem>
                    </NavLink>
                    <NavLink
                      to="EclipseAdminRequestsForChange"
                      className="remove-text-decoration"
                    >
                      <MenuItem onClick={handleClose}>Eclipse</MenuItem>
                    </NavLink>
                  </Menu>
                </Paper>
              </Grid>
              <Grid item s={2}>
                <Paper elevation={0} className={classes.paper}>
                  <Button
                    aria-controls="manager-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className="text-white"
                  >
                    MANAGEMENT PORTAL
                    <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="manager-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <NavLink
                      to="TimManagerPending"
                      className="remove-text-decoration"
                    >
                      <MenuItem onClick={handleClose}>Tim</MenuItem>
                    </NavLink>
                    <NavLink
                      to="EclipseManagerPending"
                      className="remove-text-decoration"
                    >
                      <MenuItem onClick={handleClose}>Eclipse</MenuItem>
                    </NavLink>
                  </Menu>
                </Paper>
              </Grid>
              <Grid item s={2}>
                <Paper elevation={0} className={classes.paper}>
                  <Button className="text-white">WEBSITE MANAGEMENT</Button>
                  {/* <Typography variant="h7">WEBSITE MANAGEMENT</Typography> */}
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper elevation={0} className={classes.paper}>
                  <Typography variant="h7">Welcome, {username}</Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
