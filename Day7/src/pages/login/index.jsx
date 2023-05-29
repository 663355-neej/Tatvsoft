import { Formik } from "formik";
import React from "react";
import ValidationErrorMessage from "../../component/ValidationErrorMessage";
import { Breadcrumbs, Button, TextField, Typography } from "@mui/material";
import classes from "./Login.module.css";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../service/auth.service";
import { ToastContainer,toast } from "react-toastify";


const Login = () => {

    const initialValues = {
        email: "",
        password: ""
    }

    const navigate = useNavigate();

    const onSubmit = (data,action) => {
        console.log(data);
        action.resetForm();
        authService.login(data).then((res) => {
            // navigate("/login");
            toast.success("Login Successful!!");
        })
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email Format").required("Email is required"),
        password: Yup.string().min(5, "Password must contain more than 5 chars.").required("Password is required"),
    })


    return (
        <>
            <div className={classes.wrapper}>
                <div className="register-form">
                <div className={classes.breadcrumbWrapper}>
                    <Breadcrumbs
                        separator=">"
                        aria-label="breadcrumb"
                    >
                        <Link to="/" title="Home">
                            Home
                        </Link>
                        <Typography variant="subtitle1">Login</Typography>
                    </Breadcrumbs>
                    </div>
                    <div className={classes.loginHeader}>
                        <Typography variant="h1" >
                            Login or<span> </span>   
                            <Link to="/register" title="Register">
                                  Create an Account
                            </Link>
                            </Typography>
                        <hr />
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit

                        }) => (

                            <form onSubmit={handleSubmit}>
                                <div className={classes.formBlock}>
                                    <div className="new-customer">
                                        <Typography variant="h2">New Customer</Typography>
                                        <hr />
                                        <Typography variant="subtitle2">Registration is free and easy.</Typography>
                                        <ul className="benifit-bullets">
                                            <li>Faster checkout</li>
                                            <li>Save multiple shipping addresses</li>
                                            <li>View and track orders and more</li>
                                        </ul>
                                    </div>
                                    <div className={classes.logininfo}>
                                        <Typography variant="h2">Registered Customers</Typography>
                                        <hr />
                                        <Typography variant="subtitle2">If you have an account with us, please Login.</Typography>

                                        <div className={classes.formrowwrapper}>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="email"
                                                    name="email"
                                                    label="Email Address *"
                                                    variant="outlined"
                                                    className={classes.formfield}
                                                    value={values.email}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.email}
                                                    touched={touched.email}
                                                />
                                            </div>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="password"
                                                    name="password"
                                                    label="Password *"
                                                    variant="outlined"
                                                    className={classes.formfield}
                                                    value={values.password}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="password"
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.password}
                                                    touched={touched.password}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.registerbutton}
                                        onClick={() => {
                                            navigate("/register");
                                        }}
                                    >
                                        Create an Account
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.registerbutton}
                                        type="submit"
                                        disableElevation
                                    >
                                        Log In
                                    </Button>

                                </div>
                            </form>
                        )}
                    </Formik >
                </div>
            </div>
        </>
    );
}

export default Login;