import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from '@mui/material';

import "./CardComponentDetail.css"


const CardComponentDetail = ({ productosData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 ,}}>
      
      <CardActionArea>

      <CardMedia component="img" image={productosData.Img} alt="producto" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productosData.Categoria}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productosData.Genero} 
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {productosData.Descripcion} 
          </Typography>
          <br></br>
          <Typography gutterBottom variant="body2" component="div">
           Precio: $ {productosData.Precio} 
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          Agregar a carrito
          </Button>
        </CardActions>
          
          
          
    </Card>
 
   

   
  );
};



export default CardComponentDetail;