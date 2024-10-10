'use client'
import React, { useState } from 'react';


const Pagewithevent = ({ price, category }) => {

  const [showPrice, setShowPrice] = useState('')
  const [showcategory, setShowCategory] = useState('')

  function dataSet() {
    setShowPrice(price)
    setShowCategory(category)
  }
  return (
    <div>
      <button onClick={() => dataSet()}>More Details</button>
      <p>Price: {showPrice}</p>
      <p>Category: {showcategory}</p>

    </div>
  )
}

export default Pagewithevent
