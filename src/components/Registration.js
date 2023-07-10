import React, { useState } from 'react';
import Image from '../Images/Reg.jpg';
import axios from 'axios';


const Registration = () => {
    
    const [state,setState] = useState({
        Name:"",
        Email:'',
        Password:'',
        ConformPas:'',
        Chick:''
    })
    const [error,setError]=useState({
        Commenterror:'',
        username:'',
        useremail:'',
        Password:'',
        ConformPas:'',
    })

    const nameregx = /^[A-Za-z\s]+$/;
    const emailregx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    const changeHandler = (e)=>{
        setState( {...state,[e.target.name]:e.target.value})
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        // if((state.Name).trim()===''){
        //     setError({...error,username:"Name is required"})
        // }else if(!nameregx.test(state.Name)){
        //     setError({...error,username:"Enter valid Name"})
        // }else{
        //     setError({...error,username:""})
        // }
        if((state.Name).trim()===''){
            setError({...error,username:"Name is required"})
        }else if(state.Name){
            if(!nameregx.test(state.Name)){
                setError({...error,username:"Enter valid Name"})
            }else{
                    setError({...error,username:""})
                }
        }

        if((state.Password.trim==='')){
            setError({...error,useremail:"Name is required"})
        }else if(state.Password){
            if((!emailregx.test(state.Email))){
                setError({...error,useremail:"Password must be 6-20 characters long and contain at least one lowercase letter, one uppercase letter, and one digit"})
            }
        }

    
        // if((!emailregx.test(state.Email))){
        //     setError({...error,useremail:"Password must be 6-20 characters long and contain at least one lowercase letter, one uppercase letter, and one digit"})
        // }

        // if(!passwordRegex.test(state.Password)) {
        //     setError({...error,Password:"'Password must be 6-20 characters long and contain at least one lowercase letter, one uppercase letter, and one digit';"})   
        //   }

        // if (state.ConformPas !== state.Password) {
        //     setError({...error,ConformPas:"Passwords do not match"})
        //   }

        // axios.post('http://localhost:5000/userdata',state)
    }

  return (
    <div class="container mt-5">
         <div class="row">
            <div class="col">
                <img src={Image} alt='myimage' />
            </div>
            <div class="col">
                <form onSubmit={submitHandler} >
                    <div class="mb-3">
                        <label  class="form-label">Name</label>
                        
                        <input type="text" class="form-control" name='Name' value={state.Name}  onChange={changeHandler} placeholder="Enter the name"/>
                        {error.username && <span className='text-danger mt-1'>{error.username}</span>}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Email address</label>
                        <input type="email" class="form-control" name='Email' value={state.Email} onChange={changeHandler}  placeholder="name@example.com"/>
                        {error.useremail && <span className='text-danger mt-1'>{error.useremail}</span>}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Password</label>
                        <input type="Password" class="form-control" name='Password' value={state.Password}  onChange={changeHandler}placeholder="Password"/>
                        {error.Password && <span className='text-danger mt-1'>{error.Password}</span>}
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Conform Password</label>
                        <input type="Password" class="form-control" name='ConformPas' value={state.ConformPas}  onChange={changeHandler} placeholder="ConformPassword"/>
                        {error.ConformPas && <span className='text-danger mt-1'>{error.ConformPas}</span>}
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name='Chick' value='Conform' type="checkbox"  onChange={changeHandler} />
                        <label class="form-check-label" for="flexCheckDefault">
                            Confirm
                        </label>
                    </div>
                    <div class="mt-3">
                            <button className='btn btn-primary'>Submit</button>
                            
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration