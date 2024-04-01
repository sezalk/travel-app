import React from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';
import '../components/SignupStyles.css'
import {Link} from "react-router-dom"

const RegisterValidation=object().shape({
        
        email: string().required('Valid email required').email('Valid email required'),
        password: string().min(8,'Required').required('Required'),
        
    });

const Input=({name, label, ...props})=>{
    const[field, meta] =useField(name);
    return(
            <div className='mb-4'>
                <label className="label" for={field.name}>
                {label}
                </label>
            <input
            className="blank"
            {...field}
            {...props}
            />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error"
      />
            </div>
        );
};


const Login=()=>{

    const handleSubmit = (values) => {
        console.log(values);
      };
    
      return (
        <div className="container">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={RegisterValidation}
          >
            {() => {
              return (
                <>
                <Form className="form">
                  
                  <Input name="email" label="Email" />
                  <Input name="password" label="Password" type="password" />
                  
                  <div className="form-action">
                    <Link to="/"><button
                      className="submit-button"
                      type="submit">
                      Login
                    </button></Link>
                  </div>
                </Form>
                </>
              );
            }}
          </Formik>
        </div>
      );

}

export default Login