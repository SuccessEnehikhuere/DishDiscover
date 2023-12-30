import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async({request})=>{
  const response = await request.formData()
  const data = Object.fromEntries(response)

try {
  const result = await axios.post(newsletterUrl, data)
  toast.success(result.data.msg)
  return redirect('/homepage');

} catch (error) {
  console.log(error);
   toast.error(error?.response?.data?.msg);
   return error
}
 


}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className="form" method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/*name*/}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>
      {/*lastName*/}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>

      {/*email*/}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
        />
      </div>
      {/*button*/}
      <button type="submit" className='btn btn-block' style={{marginTop:'0.5rem'}} disabled={isSubmitting} >
        {isSubmitting?'submitting':'submit'} 
      </button>
    </Form>
  )
}

export default Newsletter