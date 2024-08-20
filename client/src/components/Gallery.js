import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {images.map(image => (
          <div key={image._id} className="gallery-item">
            <img src={image.imageUrl} alt={image.description} />
            <div className="gallery-overlay">
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
