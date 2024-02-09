import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './CardComponent'

const CardComponent = ({ cardData }) => {
  var card = [
    {
      image: "/public/images/Perfect_Men_Mini_Booster-removebg-preview.png",
      title: "Item 1",
      description: "Description of Item 1",
    },
    {
      image: "image2.jpg",
      title: "Item 2",
      description: "Description of Item 2",
    },
    {
      image: "image3.jpg",
      title: "Item 3",
      description: "Description of Item 3",
    },
    {
      image: "image4.jpg",
      title: "Item 4",
      description: "Description of Item 4",
    },
    {
      image: "image5.jpg",
      title: "Item 5",
      description: "Description of Item 5",
    },
    {
      image: "image6.jpg",
      title: "Item 6",
      description: "Description of Item 6",
    },
    {
      image: "image7.jpg",
      title: "Item 7",
      description: "Description of Item 7",
    },
    {
      image: "image8.jpg",
      title: "Item 8",
      description: "Description of Item 8",
    },
    {
      image: "image9.jpg",
      title: "Item 9",
      description: "Description of Item 9",
    },
    {
      image: "image10.jpg",
      title: "Item 10",
      description: "Description of Item 10",
    },
  ];

  console.log(cardData.title);

  return (
    <div className="container childCard">
      <Card sx={{ maxWidth: 377 }}>
        <CardMedia
          sx={{ height: 210 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardComponent;
