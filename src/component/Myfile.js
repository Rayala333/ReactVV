import React, { useState } from 'react'

const Myfile = React.memo(() => {
    console.log("Myfile")
    const [Myfile,setMyfile]=useState(0)
    const myHandler = ()=>{
        setMyfile((prv)=>prv+1)
    }
  return (
    <>
    <div>MyfileData-{Myfile}</div><br/>
    <button onClick={myHandler}>MyfileButton</button>
    </>
  )
})

export default Myfile