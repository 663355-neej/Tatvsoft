import { useFormik } from 'formik';
import React from 'react';
import { signUpSchema } from './schemas';
import { Button } from '@mui/material';
//yup for form validation and formik for handling form data
const initialValues = {
    name: "",//here name is same as given in the input field
    email: "",
    age:"",
    contact:"",
    password: "",
    cpassword: ""
}
const Form = () => {
    // const Formik=useFormik({
    const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
            console.log(values);
            action.resetForm();
        }
    })
    return (
        <>
            <div className='main_div'>
                <div className='center_div formcss'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='name'>Name: </label>
                        <input type='text'
                            autoComplete='off'
                            name='name'
                            id='name'
                            placeholder='Name'
                            // value={Formik.values.name}
                            className={errors.name?"error-input":""}
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /><br/>
                        {errors.name&&touched.name?<p className='formerror'>{errors.name}</p>:null}
                        <br /><br/>
                        <label htmlFor='age'>Age: </label>
                        <input type='number'
                            autoComplete='off'
                            name='age'
                            id='age'
                            placeholder='Age'
                            // value={Formik.values.name}
                            // className={errors.age?"error-input":""}
                            value={values.age}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /><br/>
                        {errors.age&&touched.age?<p className='formerror'>{errors.age}</p>:null}
                        <br /><br/>
                        <label htmlFor='contact'>Contact: </label>
                        <input type='number'
                            autoComplete='off'
                            name='contact'
                            id='contact'
                            placeholder='contact'
                            // value={Formik.values.name}
                            // className={errors.contact?"error-input":""}
                            value={values.contact}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /><br/>
                        {errors.contact&&touched.contact?<p className='formerror'>{errors.contact}</p>:null}
                        <br /><br/>
                        <label htmlFor='email'>Email: </label>
                        <input type='email'
                            autoComplete='off'
                            name='email'
                            id='email'
                            placeholder='Email'
                            // className={errors.email?"error-input":""}
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        /><br/>
                        {errors.email&&touched.email?<p className='formerror'>{errors.email}</p>:null}<br /><br/>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                            autoComplete='off'
                            name='password'
                            id='password'
                            placeholder='password'
                            value={values.password}
                            // className={errors.password?"error-input":""}
                            onChange={handleChange}
                            onBlur={handleBlur} />
                            <br/>
                        {errors.password&&touched.password?<p className='formerror'>{errors.password}</p>:null}<br /><br/>
                        <label htmlFor='cpassword'>Confirm Password: </label>
                        <input type='password'
                            autoComplete='off'
                            name='cpassword'
                            id='cpassword'
                            placeholder='confirm password'
                            // className={errors.cpassword?"error-input":""}
                            value={values.cpassword}
                            onChange={handleChange}
                            onBlur={handleBlur} /><br/>
                        {errors.cpassword&&touched.cpassword?<p className='formerror'>{errors.cpassword}</p>:null}<br /><br/>
                        <a href='#'>
                        <Button variant='contained' color='info'>Registration</Button>
                        </a>
                    </form>
                </div>
            </div >
        </>
    )
};
export default Form;
