'use client'
import { useState } from 'react'

const GettingEvents = ({ author }) => {

  const [isCon, setIsCon] = useState("")
  const [isFetch, setIsFetching] = useState(false)

  function isFunction() {
    setIsCon(author)
    setIsFetching(true)
  }

  return (
    <div>
      <button onClick={() => isFunction()}>more Details </button>
      {
        isFetch ? <p>Aurthor :{isCon}</p> : null
      }
    </div>
  )
}

export default GettingEvents;
