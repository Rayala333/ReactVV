import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { store } from '../App';

const Header = () => {
  const [storeData,setstoreData] = useContext(store)

  return (

    <nav class="navbar navbar-dark bg-primary ">
        
        <div class="container-fluid">

                <logo className='text'>HCL Tech</logo>

                <div className='navbar'>
                
                {
                  storeData &&<>
                    <Link to='/Home' className="NavLink" >Home</Link>

                    <Link to='/Country' className="NavLink" >Country</Link>

                    <Link to='/landing' className="NavLink" >Landing</Link>
                   
                    {/* <Link to='/registration' className="NavLink">Registration</Link>

                    <Link to='/' className="NavLink">Login</Link> */}
                    
                    </>}
                    
                </div>

        </div>
        
    </nav>
    
  )

}




export default Header