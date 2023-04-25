import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "../../App.css";
import img1 from "./avator.jpg";
import img2 from "./avator.jpg";
import img3 from "./avator.jpg";

function Inicio() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Bienvenidos a NovoIdeas
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <img src={img1} alt="Imagen 1" className="customDiv" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet justo urna, in efficitur ipsum bibendum quis. Nam vitae arcu
            et tortor pretium auctor id id velit. Donec auctor suscipit turpis,
            ac
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet justo urna, in efficitur ipsum bibendum quis. Nam vitae arcu
            et tortor pretium auctor id id velit. Donec auctor suscipit turpis,
            ac
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={img2} className="customDiv" alt="Imagen 2" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            laoreet justo urna, in efficitur ipsum bibendum quis. Nam vitae arcu
            et tortor pretium auctor id id velit. Donec auctor suscipit turpis,
            ac
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={img3} className="customDiv" alt="Imagen 3" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inicio;
