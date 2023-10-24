import React from "react";
import { acData } from "../data/ac";
import { Link } from 'react-router-dom';

// The AC component displays a list of the first five AC (air conditioner) product images
const AC = () => {
  // Slice the first five items from the acData array
  const firstFiveImages = acData.slice(0, 5);

  return (
    <>
      {/* Heading for the AC section */}
      <h2>AC</h2>
      <div className="proSection">
        {/* Map through the first five AC images and create a link to the 'ac' route for each */}
        {firstFiveImages.map((item) => {
          return (
            <div className="imgBox">
              {/* Wrap the image inside a link */}
              <Link to='/ac'>
                <img className='proImage' src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AC;
