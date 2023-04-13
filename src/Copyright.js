import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import background from '../src/image/background.webp';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Api from './Api';


function Copyright() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email address").required("required"),
    password: Yup.string().required("required"),
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      let response = await axios.post(
       
        "http://localhost:8080/api/signup/login",


        formik.values
      )
        .then(res => {
          if (res.data === "exist") {
            navigate("/api");
            // <Api/>
          }
          else if (res.data === "not exist") {
            alert("email is not exist")
          }
        })
        .catch(err => {
          alert("email is not exist")

        })
      console.log(response);
      setSubmitting(false);

    },
  });

  //  const onChanges = (e) => {
  //   e.preventDefault();
  //   const {name,value} = e.target;
  //   console.log(name,value);
  //   setData({...data,[name]:value});
  //  };

  //  const saveDatas = async () => {
  //   console.log('save data',data);
  //   let response = await axios.post('http://localhost:8080/api/signup/',data);
  //   };


  const [isSighup, setIsSignup] = useState(false);
  console.log(isSighup);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={2}
          padding={3}
          style={{
            backgroundImage: `url(${background})`, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '78vh'
          }}
          borderRadius={5}
          boxShadow={"5px 5px 10px #000000"}

          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #E6E6FA',
            }
          }}
        >
          <Typography variant='h4' padding={3} textAlign='center '  >{isSighup ? "Signup" : "Login"}</Typography>
          {isSighup && <TextField required={true} margin={'normal'} type={'text'} variant='outlined' name='name' placeholder='name' autoComplete='off'
            value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && formik.touched.name} helperText={formik.touched.name && formik.touched.name} />}

          <TextField margin={'normal'} required={true} type={'email'} variant='outlined' name='email' placeholder='email' autoComplete='off'
            onChange={formik.handleChange} error={formik.touched.email && formik.touched.email} helperText={formik.touched.email && formik.touched.email} />

          <TextField margin={'normal'} required={true} type={'password'} variant='outlined' name='password' placeholder='password'
            onChange={formik.handleChange} error={formik.touched.password && formik.touched.password} helperText={formik.touched.password && formik.touched.password} />

          <Button sx={{ marginTop: 3, borderRadius: 3 }} type={'submit'} variant="contained" color='warning'>{isSighup ? "Signup" : "Login"}</Button>
          <Button style={{ color: 'white' }} onClick={() => setIsSignup(!isSighup)} sx={{ marginTop: 3, borderRadius: 3, }}>change To {isSighup ? "Login" : "signup"}</Button>

        </Box>
      </form>
    </div>
  )
}

export default Copyright
