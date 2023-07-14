import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewLanding = () => {
    const [state,setState]=useState()
    const [id,setId]=useState()
    const [data,setData]=useState({
        name:''
    })


    const getdata = async()=>{
        const mydata = await axios.get('http://localhost:5000/userdata')
         console.log(mydata.data)
         setState(mydata.data)
     }
     console.log(state)


    useEffect(()=>{
        getdata()
    },[])

    const clickHandler = (e)=>{
        // console.log(e)
        setId(e.id)
        setData({
            name:e.name
        })
    }
    // console.log(click)
  return (
    <>
        <div className='container mt-2'>
            <table className="table table-striped table-success shadow-lg  bg-body rounded ">
                    <thead>
                        <tr>
                            <td>S.no</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Country</td>
                            <td>Edir</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state &&state.map((e,i)=>(
                                <tr key={i}>
                                        <td>{i+1}</td>
                                        {
                                            id===e.id?(
                                                <>
                                                <td><input type='text' name='name' value={data.name}/></td>
                                                <td><input type='text' /></td>
                                                <td><input type='text' /></td>
                                                </>
                                            ): (
                                            <>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                                <td>{e.country}</td>
                                                <td onClick={()=>clickHandler(e)}><i className="bi bi-pencil-square"></i></td>
                                                <td><i className="bi bi-trash3"></i></td>
                                            </>)
                                            
                                        }
                                        
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    </>
  )
}

export default NewLanding