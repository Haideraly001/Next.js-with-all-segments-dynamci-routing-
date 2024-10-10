'use client'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const page = () => {

  const [product, setProducts] = useState([])

  const fetchApi = () => {
    fetch("https://dummyjson.com/products")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setProducts(data.products)
      }
      )
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>
      <h2>Hello Api</h2>
      {
        product.map((item) => (
          <h4>Titles:{item.title}</h4>
        ))
      }
    </div>
  )
}

export default page
