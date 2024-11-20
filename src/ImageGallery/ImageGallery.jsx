import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import './ImageGallery.scss'

const ImageGallery = () => {
  const searchTerm = useSelector(state => state.search.value)

  const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }`; 


  const fetchImage = async(term) => {
    try {
      const response = await axios.get(
        `${url}&query=${term}`
      );
      return response.data.results   
   } catch (error) {
    console.log(error)
   }
  }

const { isPending, error, data } = useQuery({
  queryKey: ['searchImage', searchTerm],
  queryFn: () => fetchImage(searchTerm),
});
  

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      {data.length === 0 && (
        <p className="gallery__result">No Image found with term {searchTerm}</p>
      )}
      <article className="gallery">
        {data.map((item) => (
          <div key={item.id} className="gallery__container">
            <img src={item.urls.regular} className="gallery__image" />
          </div>
        ))}
      </article>
    </>
  );
}

export default ImageGallery