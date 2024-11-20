import { useState } from "react";
import './SearchForm.scss'

const SearchForm = () => {
  const [search, setSearchTerm] = useState('')
  
  const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(event.target.value)
  }

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
    
  }
  return (
    <section className="hero">
      <h1 className="hero__title">Unsplash Images</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <input type="text" name="search" placeholder="cat" onInput={inputHandler} value={search} className="form__input"/>
        <input type="submit" value="Search" className="form__button" />
      </form>
    </section>
  )
}

export default SearchForm