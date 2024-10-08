'use client'
import React from 'react'

const page = ({ params }) => {


  console.log(params);

  return (
    <div>
      <h2>Student name is: {params.Student} </h2>
    </div>
  )
}

export default page
