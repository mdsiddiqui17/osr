import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImage = { imageUrl, description };
    try {
      await axios.post('/api/gallery', newImage);
      alert('Image added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding image');
    }
  };

  return (
    <section id="admin">
      <h2>Admin Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          placeholder="Image Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add Image</button>
      </form>
    </section>
  );
};

export default AdminPage;
