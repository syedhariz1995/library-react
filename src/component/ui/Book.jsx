import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Book = ({book}) => {
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img
            src={book.url}
            alt=""
            className="book__img"
          />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        {
            book.salePrice ? (
            <> <span className="book__price--normal">RM{book.originalPrice.toFixed(2)}</span> RM{book.salePrice.toFixed(2)}</>)
            : (
               <> RM{book.originalPrice.toFixed(2)} </> 
            )
        }
        
      </div>
    </div>
  );
};

export default Book;
