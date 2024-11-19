import './App.css';
import Theme from './Theme/Theme';
import SearchForm from './SerachForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  return (
    <div className="container">
      <Theme />
      <SearchForm />
      <ImageGallery />
    </div>
  );
}

export default App;
