import React from 'react'

const Myfile3 = React.memo(({count,myfun}) => {
    console.log("count")
  return (
    <div>
        Count-{count}<br></br>
    <button onClick={myfun}>CountBtn</button>
    </div>
  )
})

export default Myfile3