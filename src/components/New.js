import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const New = () => {
    const inputfileds={
            useName:'',
            Password:''
    }
    const validationSchema = Yup.object({
        useName:Yup.string().required('Name is required'),
    })
    const handleSubmit = (values)=>{
            console.log(values)

    }
  return (
    <Formik initialValues={inputfileds} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {
        ({ isSubmitting, setFieldValue }) => (
            <Form>
                <div>
                    <label>userName</label>
                    <Field type='text' name='username' />
                    <ErrorMessage name='username' />
                </div>
            
                <button type="submit" >Submit</button>
           
            </Form>
        )
        }
        

    </Formik>
  )
}

export default New