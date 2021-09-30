import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup"
const LoginForm = () => {
    const validate = Yup.object({
        firstName : Yup.string()
        .max(15 , "Must be 15 characters or less")
        .required("Required"),
        lastName : Yup.string()
        .max(15 , "Must be 15 characters or less")
        .required("Required"),
        email : Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Required"),
        password :Yup.string()
        .min(6,"Password should be of minimum 8 characters length")
        .required("Password is Required"),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref("password") , null] , "Password Must be Match")
    })
    return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName:"",
          email:"",
          password:"",
          confirmPassword:"",
        }}
        validationSchema={validate}
        onSubmit={values=>console.log(values)}
      >

        {values=>
        (
            <Form>
                <TextField label="First Name" name="firstName"  type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField label="Confirm Password" name="confirmPassword" type="password" />
                <button className="btn btn-dark mx-2" type="submit">Register</button>
                <button className="btn btn-danger mx-2" type="reset">Reset</button>
            </Form>

        )
        }



      </Formik>
    </div>
  );
};

export default LoginForm;
