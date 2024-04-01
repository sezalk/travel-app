import React from 'react';
import { Formik, Form, useField, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';
import '../components/SignupStyles.css'
import {Link} from "react-router-dom"

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const RegisterValidation=object().shape({
        name: string().required('Required'),
        email: string().required('Valid email required').email('Valid email required'),
        password: string().min(8,'Password should have min 8 characcters').matches(passwordRegex, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character').required('Required'),
        confirmPassword: string().required('Please confirm your password').oneOf([ref('password')], 'passwords do not match')

    });

const Input=({name, label, ...props})=>{
    const[field, meta] =useField(name);
    return(
            <div>
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


const Signup=()=>{

    
    
      return (
        <div className="container">
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            
            validationSchema={RegisterValidation}
          >
            {() => {
              return (
                <>
                <Form className="form">
                  <Input name="name" label="Name" />
                  <Input name="email" label="Email" />
                  <Input name="password" label="Password" type="password" />
                  <Input
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                  />
                  <div className="form-action">
                    <Link to="/"><button
                      className="submit-button"
                      type="submit">
                      Register
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

export default Signup