import { useCallback, useState } from 'react';
import './App.css';
// import Header from './components/header/Header';
import Myfile from './component/Myfile';
import Myfile2 from './component/Myfile2';
import Myfile3 from './component/Myfile3';


function App() {
  const [state,setState]=useState(0)
  const [count,setCount]=useState(0)
  // console.log('App')
  const clickHandler = ()=>{
    setState((e)=>e+1)
    console.log("app")
  }
  const myfun = useCallback(()=>{
    setCount((pre)=>pre+1)
    // console.log("count")
  },[]) 

  return (
    <>
      {/* <Header/> */}
      <Myfile/>   <br/><hr/>
      {state}<br/>
      <button onClick={clickHandler}>ClickApp</button><br/><hr/>
      <Myfile2/><br></br><hr/>
      <Myfile3 count={count} myfun={myfun}/>
       </>
  );
}

export default App;
