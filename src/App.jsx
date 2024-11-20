import './App.css';
import Theme from './Theme/Theme';
import SearchForm from './SerachForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <div className="body-container">
      <QueryClientProvider client={queryClient}>
        <Theme />
        <SearchForm />
        <ImageGallery />
      </QueryClientProvider>
    </div>
  );
}

export default App;
