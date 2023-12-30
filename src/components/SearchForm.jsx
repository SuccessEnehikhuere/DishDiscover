import React from 'react'
import Wrapper from '../assets/wrappers/searchForm'
import { Form, useNavigation } from 'react-router-dom'


const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submittting'
  return (
    <Wrapper>
      <Form className='form'>
        <input type='search' name='search' className='form-input' defaultValue={searchTerm}/>
        <button type='submit' disabled={isSubmitting} className='btn'>
          {isSubmitting?'submitting':'submit'}
        </button>

      </Form>

    </Wrapper>
  )
}

export default SearchForm