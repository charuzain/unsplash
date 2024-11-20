import './SearchForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setSearchTerm} from '../slice/searchSlice.js'

const SearchForm = () => {

  const search = useSelector(state => state.search.value)

  const dispatch = useDispatch();
  
  const formSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(setSearchTerm(e.target.value));
  }

  const inputHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
    
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