import { Button, Container, Grid, Typography } from "@mui/material";
import img1 from "../../assets/Arrows_home.png";
import { List, ListItem, ListItemText } from "@mui/material";
import Slider from "./Slider";
function Inicio() {
  return (
    <Container maxWidth="md" style={{ padding: "1rem" }}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} flexWrap={"wrap"}>
          <img src={img1} alt="Imagen 1" className="customDiv" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            Transforma tu negocio
          </Typography>
          <Typography variant="h5" gutterBottom>
            Creamos conceptos de Marca y Estrategias de Marketing que posicionen
            tu negocio mucho más rápido que la competencia.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="h2" gutterBottom>
            Cuando tus estrategias no funcionan, tener un negocio es demasiado
            frustrante.
          </Typography>
          <Button variant="contained" color="warning">
            HABLA CON UN CONSULTOR
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" align="center" component="h2" gutterBottom>
            Sabemos que has intentado hacerlo correctamente en el pasado pero...
          </Typography>
          <Typography variant="body1" gutterBottom>
            <List>
              <ListItem>
                <ListItemText
                  primary="1. No lograste conseguir que tus clientes entendieran que tienes el
                mejor producto o servicio"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Nunca te percibieron diferente a tus competidores"></ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText primary="3. Confiaste en alguien para que te ayudara pero no conseguiste resultados " />
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2" gutterBottom align="center">
            ¿Qué hace diferente nuestra agencia?
          </Typography>

          <Slider></Slider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Inicio;
