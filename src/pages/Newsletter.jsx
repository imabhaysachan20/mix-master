import React from 'react'
import axios from 'axios';
import { Form,redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const newletterUrl = 'https://www.course-api.com/cocktails-newsletter';


export const action = async ({request})=>{
  let  data = await request.formData();
  
  data = Object.fromEntries(data)
  try {
  const response = await axios.post(newletterUrl,data)
  toast.success(response.data.msg);
  return redirect("/")
  }
  catch(e) {
    toast.error(e?.response?.data?.msg);
    return e;
    
  }
  
  
} 

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting =navigation.state == "submitting";
  return (
    <Form className='form' method='POST'>
      <h4 style={{textAlign:"center",marginBottom:"2rem"}}>Our NewsLetter</h4>
    
    <div className="form-row">
      <label htmlFor="name" className='form-label'>Fist Name</label>
      <input type="text"  className='form-input' name='name' id='fname' defaultValue=""/>
    </div>
    <div className="form-row">
      <label htmlFor="name" className='form-label'>Last Name</label>
      <input type="text"  className='form-input' name='lastName' id='lname' defaultValue=""/>
    </div>
    <div className="form-row">
      <label htmlFor="name" className='form-label'>Email</label>
      <input type="text"  className='form-input' name='email' id='email' defaultValue=""/>
    </div>
    <button type='submit' style={{width:"100%"}} className='btn' disabled={isSubmitting}>{isSubmitting?"Submitting":"Submit Form"}</button>
    </Form>
  )
}

export default Newsletter
