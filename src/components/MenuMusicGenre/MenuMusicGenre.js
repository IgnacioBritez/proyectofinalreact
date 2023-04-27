/* import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuMusicGenre = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
      backgroundcolor: "black",
      fontfamily: "sansserif",
	    fontsize: "12px",
    },
    // upperText: {
    //   textTransform: "uppercase",
    // },
    link: {
      color: "black",
      textDecoration: "none",
      backgroundcolor: "black",
      fontfamily: "sansserif",
	    fontsize: 12,
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h3>CATEGORIA</h3>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/music-genre/Hombre" style={styles.link}>
            Hombre
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/music-genre/Mujer" style={styles.link}>
            Mujer
          </Link>
        </MenuItem>
        
    
        
        
      </Menu>
    </div>
  );
};

export default MenuMusicGenre;

*/


import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';





export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
      backgroundcolor: "black",
      fontfamily: "sansserif",
	    fontsize: "12px",
    },

    btnStyle: {
      color: "white",

    },
   
    link: {
      color: "black",
      textDecoration: "none",
      backgroundcolor: "black",
      fontfamily: "Roboto Helvetica Arial sans-serif",
      fontSize: "0.875rem",
	    
    },
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={styles.btnStyle}
      >
        CATEGORIA
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/music-genre/Hombre" style={styles.link}>
          HOMBRE
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/music-genre/Mujer" style={styles.link}>
          MUJER 
          </Link>
        </MenuItem>
    
       
      </Menu>
    </div>
  );
}





