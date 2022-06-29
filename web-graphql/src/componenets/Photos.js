import React from 'react';
import { useQuery } from '@apollo/client';
import PHOTO_QUERY from '../queries/clientQueries';

function Photos() {
  const { data, loading, error } = useQuery(PHOTO_QUERY);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return data.photos.map((photo) => (
    <div key={photo.id}>
      <h3>{photo.name}</h3>
      <p>{photo.description}</p>
      <p>{photo.filename}</p>
    </div>
  ));
}

export default Photos;
