import React from 'react'
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRefExp = /^01[0125][0-9]{8}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("This Field is Required"),
  lastName: yup.string().required("This Field is Required"),
  email: yup.string().email("Invalid Email").required("This Field is Required"),
  contact: yup
    .string()
    .matches(phoneRefExp, "phone Number is not Valid")
    .required("This Field is Required"),
  address1: yup.string().required("This Field is Required"),
  address2: yup.string().required("This Field is Required"),
});

export default function Form() {
    const isNonMobile = useMediaQuery("min-width:600px")
    const handleFormikSubmit = (values) => {
        console.log(values);
    }
  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handlechange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{gridColumn: "span 2 !important"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="last Name"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{gridColumn: "span 2 !important"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.address1}
                name='address1'
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{gridColumn: "span 4"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onChange={handlechange}
                onBlur={handleBlur}
                value={values.address2}
                name='address2'
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{gridColumn: "span 4 "}}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
                <Button type='submit' color='secondary' variant='contained'>
                    Create New User
                </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
