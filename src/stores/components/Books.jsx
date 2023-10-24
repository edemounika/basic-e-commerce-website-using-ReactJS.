import React from "react";
import { booksData } from "../data/books";
import { Link } from 'react-router-dom'

const Books = () => {

    const firstFiveImages = booksData.slice(0,5)
  return (
    <>
    <h2>Books</h2>
    <div className="proSection">
      {firstFiveImages.map((item) => {
        return (
        <div className="imgBox">
            
                      <Link to='/books'>
                         <img className='proImage' src={item.image} alt="" />
                      </Link>
        </div>
        )
      })}
    </div>
    
    </>
  );
};
export default Books;