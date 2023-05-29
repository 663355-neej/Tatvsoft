import { Breadcrumbs, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material";
import {Link } from "react-router-dom";
import * as Yup from "yup";
import classes from './Register.module.css';
import { Formik, Form } from "formik";
import ValidationErrorMessage from "../../component/ValidationErrorMessage";
import React from 'react';
import authService from "../../service/auth.service";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
const Register = () => {
    const roleList = [
        { id: 2, name: "buyer" },
        { id: 3, name: "seller" }
    ];
    const navigate = useNavigate();
    const initialValues = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        roleId: 0,
        password: "",
        confirmPassword: ""
    };



    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid Email Address format")
            .required("Email is required"),
        password: Yup.string()
            .min(5, "Password must of min 5 chars")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf(
                [Yup.ref("password"), null],
                "Password and Confirm Password must match"
            )
            .required("Confirm Password is required")
        ,
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        roleId: Yup.number().required("Role is required"),

    })

    const onSubmit = (data, actions) => {
        console.log("Submitted", data);
        actions.resetForm();
        delete data.id;
        delete data.confirmPassword;
        authService.create(data).then((res) => {
            // navigate("/Login");
            toast.success("Successfully registered!!");
        })
    }

    return (
        <>
            <div className={classes.wrapper}>
                <div className="register-form">

                    <div className={classes.breadcrumbWrapper}>
                        <Breadcrumbs
                            separator=">"
                            aria-label="breadcrumb"
                        // className={classes.breadcrumbWrapper}
                        // style={{margin:"20px 40px",width: "fit-content"}}
                        >
                            <Link href="/" title="Home">
                                Home
                            </Link>
                            <Typography variant="subtitle1">Create an Account</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className={classes.loginHeader}>
                        <Typography variant="h1">
                            <Link to="/login" title="Login">
                                Login
                            </Link> or<span className={classes.current}> Create an Account</span> </Typography>
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

                            <Form>
                                <div className={classes.formBlock}>
                                    <div className={classes.personalinfo}>
                                        <Typography variant="h2">Personal Information</Typography>
                                        <hr />
                                        <Typography variant="subtitle2">Please Enter the following information to create an account</Typography>

                                        <div className={classes.formrowwrapper}>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="first-name"
                                                    name="firstName"
                                                    label="First Name *"
                                                    variant="outlined"
                                                    value={values.firstName}
                                                    className={classes.formfield}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.firstName}
                                                    touched={touched.firstName}
                                                />
                                            </div>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="last-name"
                                                    name="lastName"
                                                    label="Last Name *"
                                                    variant="outlined"
                                                    value={values.lastName}
                                                    className={classes.formfield}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.lastName}
                                                    touched={touched.lastName}
                                                />
                                            </div>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="email"
                                                    name="email"
                                                    label="Email Address *"
                                                    variant="outlined"
                                                    value={values.email}
                                                    className={classes.formfield}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.email}
                                                    touched={touched.email}
                                                />
                                            </div>
                                            <div className={classes.formcol}>
                                                <FormControl
                                                    className={`{classes.dropdownwrapper} ${classes.formfield}`}
                                                    variant="outlined"

                                                >
                                                    <InputLabel htmlFor="select"> Roles *</InputLabel>
                                                    <Select
                                                        name="roleId"
                                                        id={"roleId"}
                                                        value={values.roleId}
                                                        label='roleId'
                                                        onChange={handleChange}
                                                    >
                                                        {roleList.length > 0 &&
                                                            roleList.map((role) => (
                                                                <MenuItem value={role.id} key={"name" + role.id}>
                                                                    {role.name}
                                                                </MenuItem>
                                                            ))
                                                        }

                                                    </Select>

                                                </FormControl>
                                            </div>


                                        </div>
                                    </div>
                                    <div className={classes.logininfo}>
                                        <Typography variant="h2">Login Information</Typography>
                                        <hr />

                                        <div className={classes.formrowwrapper}>
                                            <div className={classes.formcol}>
                                            <TextField
                                                    id="password"
                                                    name="password"
                                                    value={values.password}
                                                    label="Password *"
                                                    variant="outlined"
                                                    className={classes.formfield}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="password"
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.password}
                                                    touched={touched.password}
                                                />
                                            </div>
                                            <div className={classes.formcol}>
                                                <TextField
                                                    id="confirm-password"
                                                    name="confirmPassword"
                                                    value={values.confirmPassword}
                                                    label="Confirm Password *"
                                                    variant="outlined"
                                                    className={classes.formfield}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    type="password"
                                                />
                                                <ValidationErrorMessage
                                                    message={errors.confirmPassword}
                                                    touched={touched.confirmPassword}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.registerbutton}
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default Register;