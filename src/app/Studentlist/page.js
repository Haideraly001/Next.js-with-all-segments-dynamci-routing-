'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Studentlist = () => {
  const router = useRouter()

  const navbarfunction = (parameter) => {
    router.push('/Studentlist/' + parameter)
  }

  const data = [
    { id: 1, name: 'Haider' },
    { id: 2, name: 'Talal' },
    { id: 3, name: 'Shahzaib' },
    { id: 35, name: 'Umar' },

  ]

  return (
    // <div>
    //   <ul>
    //     <h1> Student List</h1>
    //     <li onClick={() => navbarfunction("Haider")} >Haider Aly</li>
    //     <li onClick={() => navbarfunction("Talal")}>Talal Janjua</li>
    //     <li onClick={() => navbarfunction("Shahzaib")}>Shahzaib</li>
    //     <li onClick={() => navbarfunction("umer")}>Umer</li>
    //   </ul>
    // </div>

    <div>
      <ul>Student List </ul>
      {data.map((list) => {
        return <li onClick={() => { navbarfunction(list.id) }}>{list.name}</li>
      })}
    </div>
  )
}

export default Studentlist
