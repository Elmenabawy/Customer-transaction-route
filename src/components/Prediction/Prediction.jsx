import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';

export default function Prediction() {
  const { Prediction } = useContext(UserContext);

  return (
    <div>
      <h2>package: {Prediction}</h2>
    </div>
  );
}
