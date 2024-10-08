'use client'
import { useParams, usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function layout({ children }) {

  const router = useRouter()

  const [data, setData] = useState(true)
  const params = usePathname()

  console.log(params);


  const goingOnNavbar = () => {
    setData(!data)
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }

  return (


    <div>
      {
        data === true ? <div>
          <ul>
            <li>Login navbar</li>
          </ul>
          <li onClick={goingOnNavbar}>Home page</li>
          <br /><br />
        </div> : <div>Loading data.... <br /><br /></div>

      }



      {children}
    </div >
  )
}