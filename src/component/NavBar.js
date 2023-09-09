import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavBarStyle.css";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h6>DAILY NEEDS</h6>
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <NavLink
            to="/bill"
            className={styles.navLink}
            // activeClassName={styles.activeNavLink}
            style={{ textDecoration: "none", marginLeft: "15px" }}
          >
            Bill
          </NavLink>
          <NavLink
            to="/pricelist"
            className={styles.navLink}
            // activeClassName={styles.activeNavLink}
            style={{ textDecoration: "none", marginLeft: "15px" }}
          >
            PriceList
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
