import * as Yup from 'yup';
export const signUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Please Enter Your name"),
    age:Yup.number().positive().integer().min(5,"Age must be greater than 5").max(100,"Age must be greater than 100").required("Age is required"),
    email:Yup.string().email().required("Please Enter Your email"),
    contact:Yup.string().matches(/^[0-9]{10}$/,"mobile number must contain 10 digits").required("Please enter contact number"),
    password:Yup.string().matches(/^[0-9a-zA-Z$@^*]{8,15}$/,"length must be greater than 8 and less than 15").required("Please Enter Your password"),
    cpassword:Yup.string().required().oneOf([Yup.ref("password"),null],"Password doesn't match")
})
