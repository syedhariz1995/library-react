import React from 'react'

const Price = ({originalPrice, salePrice}) => {
  return (
    <div className="book__price">
    {
        salePrice ? (
        <> <span className="book__price--normal">RM{originalPrice.toFixed(2)}</span> RM{salePrice.toFixed(2)}</>)
        : (
           <> RM{originalPrice.toFixed(2)} </> 
        )
    }
  </div>
  )
}

export default Price
