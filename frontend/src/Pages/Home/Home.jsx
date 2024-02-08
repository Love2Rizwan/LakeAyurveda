import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import CardComponent from "../../Components/Card/CardComponent";

const Home = () => {
  var card = [
    {
      image: "image1.jpg",
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

  return (
    <div>
      <Hero />
      <div className="container m-5">
        {card.map((data) => {
          return <CardComponent key={data.title} cardData={data} />;
        })}
        {/* <CardComponent /> */}
      </div>
    </div>
  );
};

export default Home;
