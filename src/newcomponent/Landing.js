import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Landing = () => {
    const [state,setState]=useState([])

    const [update,setUpdate]=useState({
        Name:'',
        Email:'',
        Country:'',
        State:''
    })
    const [id,setId]=useState()

    console.log(id)


    const getdata = async()=>{
        const mydata = await axios.get('http://localhost:5000/userdata')
         console.log(mydata.data)
         setState(mydata.data)
     }

    useEffect(()=>{
        getdata()
    },[])
    // console.log(state,'state')

    const editeHandler = (id)=>{
      const editdata =    state.filter((e,i)=>e.id===id)

      console.log(editdata[0].name)
    //   const data = editdata[0]
      setUpdate({
        Name:editdata[0].name,
        Email:editdata[0].email,
        Country:editdata[0].country,
        State:editdata[0].state
      })
      setId(id)
    
    }
    const handleUpdate = (e)=>{
        setUpdate( {...update,[e.target.name]:e.target.value})
    }

    const submitHandelr = async(e)=>{
        e.preventDefault()
        let obj = {
            name:update.Name,
            email:update.Email,
            country:update.Country,
            state:update.State
        }
        console.log(obj)
       await axios.put(`http://localhost:5000/userdata/${id}`,obj)

        // getdata()

    }

    const deleteHandler = (id)=>{
        const deletedata = axios.delete(`http://localhost:5000/userdata/${id}`)
                alert("delete")
                getdata()
        console.log(deletedata)
    }
  return (
    <div class="container mt-3 row ">

        <div className='col'>
                <form onSubmit={submitHandelr} >
                    <div class="mb-3">
                        <label  class="form-label">Name</label>
                        
                        <input type="text" class="form-control" name='Name' value={update.Name} onChange={handleUpdate}  placeholder="Enter the name"/>
                        {/* {error.username && <span className='text-danger mt-1'>{error.username}</span>} */}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Email address</label>
                        <input type="email" class="form-control" name='Email' value={update.Email} onChange={handleUpdate}  placeholder="name@example.com"/>
                        {/* {error.useremail && <span className='text-danger mt-1'>{error.useremail}</span>} */}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Country</label>
                        <input type="text" class="form-control" name='country' value={update.Country} onChange={handleUpdate}  placeholder="Password"/>
                        {/* {error.Password && <span className='text-danger mt-1'>{error.Password}</span>} */}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">State</label>
                        <input type="text" class="form-control" name='state' value={update.State} onChange={handleUpdate}  placeholder="ConformPassword"/>
                        {/* {error.ConformPas && <span className='text-danger mt-1'>{error.ConformPas}</span>} */}
                    </div>
                    {/* <div class="form-check">
                        <input class="form-check-input" name='Chick' value='Conform' type="checkbox"  />
                        <label class="form-check-label" for="flexCheckDefault">
                            Confirm
                        </label>
                    </div> */}
                    <div class="mt-3">
                            <button className='btn btn-primary'>Update</button>
                    </div>
                </form>
        </div>
        <div className='col-7 text-center'>
            <table className="table table-striped table-success shadow-lg  bg-body rounded ">
                        <thead>
                            <tr>
                                <td>S.no</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>country</td>
                                <td>state</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                                    {
                                    state &&  state.map((e,i)=>(
                                            <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.country}</td>
                                                    <td>{e.state}</td>
                                                    <td onClick={()=>{editeHandler(e.id)}} ><i className="bi bi-pencil-square"></i></td>
                                                    <td onClick={()=>{deleteHandler(e.id)}}><i className="bi bi-trash3"></i></td>
                                            </tr>
                                        ))
                                    }
                                
                        </tbody>
                </table>
            </div>
    </div>
    
  )
}

export default Landing