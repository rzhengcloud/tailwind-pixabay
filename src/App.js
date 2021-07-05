import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch'

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsloading(false);
    })
    .catch(err => console.log(err))
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
    // when term changes, it fetches again. so when someone types and
    // submits, term is added and useEffect runs.
  },[term]);


  return (
    
    <div className="container mx-auto">
      <h1 className="text-6xl text-center mx-auto">RZ Image Search</h1>
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto">No Images found</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto">Loading...</h1> 
      : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image2 = {image} />
        ))}

      </div>}
    </div>

  );
}

export default App;
