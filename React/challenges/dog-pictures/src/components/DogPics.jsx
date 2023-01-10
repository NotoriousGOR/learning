import React from "react";
import { useState } from "react";

export default function DogPics() {
  const [dogsPic, setDogPic] = useState("https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg");

  /// fetch from: https://dog.ceo/api/breeds/image/random Fetch!

  const fetchDoggyPics = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((data) => data.json())
      .then((data) => {
        setDogPic(data.message)
      });
  };

  return (
    <div className="dog-pics">
      <img src={dogsPic} alt="dog" />
      <button onClick={fetchDoggyPics}>🐶</button>
    </div>
  );
}
