import React from 'react'
import axios  from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography,Button, Card } from '@mui/material';
import background from '../src/image/images.jpg';


export default function Api() {

 const [data,setData] = useState({
  studentName:'',
  parentsNo:'',
  class:'',
  rollno:'',
  emailaddress:'',
});

 const onChange = (e) => {
  const {name,value} = e.target;
  console.log(name,value);
  setData({...data,[name]:value});
 };

 const saveData = async () => {
  console.log('save data',data);
  let response = await axios.post ('http://localhost:8080/api/student/create',data);
 };
 
 
 return(
<div>
<div style={{  backgroundImage: `url(${background})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
                width: '100vw',
                height: '100vh'
              }}> 
    {/* <form method="post" style={{color:'black', fontSize:25, textAlign:'center', fontWeight:'bold'}}>
        <div >
          <label htmlFor="name">studentName:</label>
         <input onChange={onChange} name="studentName" id='name'  type="text"/>
        </div>
        <div>
          <label htmlFor="rollno">class:</label>
          <input onChange={onChange} name="class" id='class' type="text"/>
        </div>
        <div>
          <label htmlFor="class">rollno:</label>
          <input onChange={onChange} name="rollno" id='rollno' type="text"/>
        </div>
        <div>
          <label htmlFor="parentNo">parentsNo:</label>
          <input onChange={onChange} name="parentsNo" id='parentsNo' type="number" />
        </div>
        <div>
          <label htmlFor="email">emailaddress:</label>
          <input onChange={onChange} name="emailaddress" id='email'/>
        </div>
        <div>
        <button type="button" onClick={saveData}  textAlign='center'fontWeight='bold'>submit</button> 
        </div>
    </form>
     */}

     <form>
     <Box 
     
      display="flex" 
      flexDirection={"column"} 
      alignItems="center"
      justifyContent={"center"}
      margin="auto"
      
      // marginTop={10}
      // padding={3}
      background
      component="form"
      sx={{
        '& > :not(style)': { m:1, width: '300px', height:'450px'},
      }}
      noValidate
      autoComplete="off"
    >
      <Card elevation={20} sx={{borderRadius:5}} >
      <Typography variant='h4' sx={{mt:2}}>SignUp</Typography>
      <TextField  sx={{mt:1}} onChange={onChange} id="outlined-basic"  variant="outlined" name='studentName' placeholder='studentName'/>
      <TextField  sx={{mt:1}} onChange={onChange} id="outlined-basic" variant="outlined" name='parentsNo' placeholder='parentsNo'/>
      <TextField  sx={{mt:1}} onChange={onChange} id="outlined-basic" variant="outlined" name='class' placeholder='class'/>
      <TextField  sx={{mt:1}} onChange={onChange} id="outlined-basic" variant="outlined" name='rollno' placeholder='rollno'/>
      <TextField  sx={{mt:1}} onChange={onChange} id="outlined-basic" variant="outlined" name='emailaddress' placeholder='emailaddress'/>
      <Button sx={{marginTop:3, borderRadius:3}} onClick={saveData} type={'submit'} variant="contained" color='warning'>upload</Button>
      </Card>
    </Box>
     </form>
  </div>
</div>
 );

 
 }
