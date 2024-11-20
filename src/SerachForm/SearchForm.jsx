import './SearchForm.scss';
import { useDispatch } from 'react-redux';
import {setSearchTerm} from '../slice/searchSlice.js'
import { useState } from 'react';

const SearchForm = () => {

  const [term , setTerm] = useState('')
  const dispatch = useDispatch();
  
  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!term) {
     alert("Cant submit empty form")
    }
    else {
      dispatch(setSearchTerm(term))
    }
  }

  const inputHandler = (event) => {
    const value = event.target.value;
    setTerm(value)
    
  }
  return (
    <section className="hero">
      <h1 className="hero__title">Unsplash Images</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input type="text" name="search" placeholder="cat" onInput={inputHandler} value={term} className="form__input"/>
        <input type="submit" value="Search" className="form__button" />
      </form>
    </section>
  )
}

export default SearchForm