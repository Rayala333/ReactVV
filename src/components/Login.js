import React,{useContext} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import Image from '../Images/OIP.jpg'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { store } from '../App';


const Login = () => {

    const [storeData,setstoreData] = useContext(store)

    const initialValues = {
        email: '',
        password: '',
      };
      const navigate = useNavigate()

      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
                });

  const handleSubmit = (values, { setSubmitting }) => {
                
                console.log(values)
                
                axios.get('http://localhost:5000/userdata')
                .then(response => {
                    console.log('Registration successful:', response.data);

                    const users = response.data;

                    const user = users.find(u => u.email === values.email && u.password === values.password);
                    if(user){
                        alert("Loginsuccess")
                        setstoreData(true)
                        // navigate('/landing')
                        navigate('/newLanding')
                    }else{
                            alert("In vallid user email and password")
                    }
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                })
                .finally(() => {
                    setSubmitting(false);
                });
            };

  
  return (
    <div class="container mt-5">
         <div class="row">
            <div class="col">
                <img src={Image} alt='myimage' />
            </div>
            <div class="col mt-4">
                
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, setFieldValue }) => (
                
                <Form>
                    <div className="form-group row mb-3 ">
                        <div className='col'>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                        <div className='col'>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" className="form-control" />
                            <ErrorMessage name="password" component="div" className="text-danger" />
                        </div>
                    </div>

                    <div className="form-group mb-2">
                        <label><Field type="checkbox" name="acceptTerms" /> Accept Terms & Conditions</label>
                        <ErrorMessage name="acceptTerms" component="div" className="text-danger" />
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <button type="submit" className="btn btn-primary mb-5 mt-1" disabled={isSubmitting}>
                            Submit
                            </button>
                        </div>
                        <div className='col mt-3'>
                        <Link to='registration' >click here to register?</Link>
                            
                        </div>
                    </div>
                </Form>
                
                )}

                </Formik>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Login