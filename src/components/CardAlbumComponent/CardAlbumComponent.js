import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CardAlbumComponent = ({ productosData }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 4 }}>
      <CardActionArea>
        <CardMedia component="img" image={productosData.Img} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productosData.Categoria}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {productosData.Genero} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {productosData.Material} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $ {productosData.Precio} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAlbumComponent;
