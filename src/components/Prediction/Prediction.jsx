import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export default function Prediction() {
  const { setPrediction } = useContext(UserContext);

  // Retrieve prediction from local storage
  const storedPrediction = localStorage.getItem('prediction');

  // If prediction is stored in local storage, update the context
  if (storedPrediction) {
    setPrediction(storedPrediction);
  }

  return (
    <div>
      <h2>package: {storedPrediction}</h2>
    </div>
  );
}