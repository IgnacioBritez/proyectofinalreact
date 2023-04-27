import React, { useContext } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import MenuMusicGenre from "../MenuMusicGenre/MenuMusicGenre";
import { Link } from "react-router-dom";
import "./ResponsiveNavigation.css";

import { ItemsContext } from "../../Context/ItemsContext";

//logo
import img from "./logo2.jpeg";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    
  },
  purchaseButton: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
};

const ResponsiveNavigation = () => {
  const [items] = useContext(ItemsContext);

  return (
    <AppBar position="static" className="ResponsiveNavigation">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">
          <Link to="/">
          <img src={img} alt="logo" width="90" />
          </Link>
          <Link to="/" style={styles.linkButton}>
            INICIO
          </Link>
          <MenuMusicGenre />        
          <Link to="/contact" style={styles.linkButton}>
            CONTACTO
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <i className="fa-solid fa-cart-shopping"></i>
            {items.length}
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavigation;
