import React from "react";
import Carousel from "react-material-ui-carousel";
import img1 from "../../assets/index.jpg";
import img2 from "../../assets/marketing.jpg";
import img3 from "../../assets/venta.jpg";

const items = [
  {
    src: img1,
    alt: "imagen 1",
  },
  {
    src: img2,
    alt: "Descripción de la imagen 2",
  },
  {
    src: img3,
    alt: "Descripción de la imagen 3",
  },
];
function Item(props) {
  return <img src={props.item.src} alt={props.item.alt} className="imgCard" />;
}
function Slider() {
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          color: "#000",
          borderRadius: 0,
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Slider;
