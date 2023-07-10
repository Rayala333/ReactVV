import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Image from '../Images/Reg.jpg';
import { useNavigate } from 'react-router-dom';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';

const Regster = () => {

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]); 
    const [districts, setDistricts] = useState([]);

    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const hobbies = ["Cricket",'Reading',"football",'badmintion']


      const initialValues = {
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        address: '',
        country: '',
        state: '',
        district: '',
        hobbies:[],
        pincode: '',
        acceptTerms: false,
      };
    
      useEffect(() => { 
        // Fetch countries data from db.json  
            axios.get('http://localhost:5000/countries') 
            .then(response => {
                setCountries(response.data);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            });
      }, []);
    
      const handleCountryChange = (e, setFieldValue) => {
                    const countryname = e.target.value;
                    const selectedCountry = countries.find(country => country.name === countryname);

                    if (selectedCountry) {
                    setStates(selectedCountry.states);
                    setFieldValue('country', selectedCountry.name);
                    } else {
                    setStates([]);
                    setFieldValue('country', '');
                    }
                    setFieldValue('state', '');
                    setFieldValue('district', '');
            };
    
      const handleStateChange = (e, setFieldValue) => {
                    const statename = e.target.value;
                    const selectedState = states.find(state => state.name === statename);
                
                    if (selectedState) {
                    setDistricts(selectedState.districts);
                    setFieldValue('state', selectedState.name);
                    } else {
                    setDistricts([]);
                    setFieldValue('state', '');
                    }
                    setFieldValue('district', '');
                };
    
      const validationSchema = Yup.object().shape({

            name: Yup.string().required('Name is required'),
    
            password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    
            email: Yup.string().email('Invalid email').required('Email is required'),
        
            address: Yup.string().required('Address is required'),
        
            country: Yup.string().required('Country is required'),
        
            state: Yup.string().required('State is required'),
        
            district: Yup.string().required('District is required'),
            
            hobbies: Yup.array().required('Hobbies are required').min(1, 'Select at least one hobby'),
        
            pincode: Yup.string().required('Pincode is required').matches(/^[56]\d{0,5}$/,'Is not in correct format'),
        
            acceptTerms: Yup.bool().oneOf([true], 'Please accept the terms and conditions'),
    
      });

      const navigate = useNavigate()

      const handleSubmit = (values, { setSubmitting }) => {
                    // Here you can send the form data to the server API
                    console.log(values)
                    axios.post('http://localhost:5000/userdata',values)
                    .then(response => {
                        console.log('Registration successful:', response.data);
                        if(response.data){
                                navigate('/')
                        }
                    })
                    .catch(error => {
                        console.error('Registration failed:', error);
                    })
                    .finally(() => {
                        setSubmitting(false);
                        
                    });
                };


        const handleHobbiesChange = (selectedOptions, setFieldValue) => {

                    const selectedHobbyValues = selectedOptions.map((option) => option.value);
                
                    setSelectedHobbies(selectedHobbyValues);
                
                    setFieldValue('hobbies', selectedHobbyValues);
                
                  };


  return (
    <div class="container mt-5">
         <div class="row">
            <div class="col">
                <img src={Image} alt='myimage' />
            </div>
            <div class="col">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, setFieldValue }) => (
                <Form>
                    <div className="form-group row mb-3 ">
                        <div className='col'>
                            <label htmlFor="name">Name</label>
                            <Field type="text" name="name" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
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
                        <div className='col'>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field type="password" name="confirmPassword" className="form-control" />
                            <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                        </div>
                    </div>

                    <div className="form-group row mb-3">
                            <div className='col'>
                                <label htmlFor="country">Country</label>
                                <Field as="select" name="country" className="form-select"  onChange={(e) => handleCountryChange(e, setFieldValue)}>
                                    <option value="">Select Country</option>
                                    {countries.map(country => (
                                    <option key={country.id} value={country.name}>{country.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="country" component="div" className="text-danger" />
                            </div>
                            <div className='col'>
                                <label htmlFor="state">State</label>
                                <Field as="select" name="state" className="form-select" disabled={!states.length} onChange={(e) => handleStateChange(e, setFieldValue)}>
                                    <option value="">Select State</option>
                                    {states.map(state => (
                                    <option key={state.id} value={state.name}>{state.name}</option>
                                    ))}

                                </Field>
                                <ErrorMessage name="state" component="div" className="text-danger" />
                            </div>
                            <div className='col'>
                                <label htmlFor="district">District</label>
                                <Field as="select" name="district" className="form-select" disabled={!districts.length}>
                                    <option value="">Select District</option>
                                    {districts.map(district => (
                                    <option key={district.id} value={district.name}>{district.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="district" component="div" className="text-danger" />
                            </div>
                    </div>
                    <div className="form-group row mb-3">
                        <div className='col'>
                        <div className='col'>
                                <label htmlFor="district">Hobbies</label>
                                <Select 
                                    options={hobbies.map((hobby) => ({ value: hobby, label: hobby }))}
                                    value={selectedHobbies.map((hobby) => ({ value: hobby, label: hobby }))}
                                    onChange={(selectedOptions) => handleHobbiesChange(selectedOptions, setFieldValue)}
                                    isMulti
                                    classNamePrefix="react-select"
                                />
                                <ErrorMessage name="district" component="div" className="text-danger" />
                            </div>

                        </div>
                        <div className='col'>
                            <label htmlFor="address">Address</label>
                            <Field type="text" name="address" className="form-control" />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </div>
                        <div className='col'>
                            <label htmlFor="pincode">Pincode</label>
                            <Field type="text" name="pincode" className="form-control" maxLength={6} />
                            <ErrorMessage name="pincode" component="div" className="text-danger" />
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <label><Field type="checkbox" name="acceptTerms" /> Accept Terms & Conditions</label>
                        <ErrorMessage name="acceptTerms" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-5 mt-1" disabled={isSubmitting}>
                        Submit
                    </button>
                    
                </Form>

                )}

                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Regster