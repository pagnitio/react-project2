import React, { useContext } from "react";
import pixabayContext from "../PixaBay/pixabayContext";

const Images = () => {
  const { imageData } = useContext(pixabayContext);
  return (
    <div>
      {imageData.map((image) => (
        <div key={image.id}>
          <div className="item">
            <img src={image.largeImageURL} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;
