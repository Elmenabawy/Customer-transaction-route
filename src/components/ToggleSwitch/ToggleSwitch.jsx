import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import styles from './ToggleSwitch.module.css'; // Import CSS module for custom styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false); // State to track toggle status

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="form-check form-switch d-flex justify-content-center">
      <input
        className={`form-check-input ${isOn ? styles.green : ''}`} // Apply 'green' class when isOn is true
        type="checkbox"
        id="toggleSwitch"
        checked={isOn}
        onChange={handleToggle}
        style={{ width: '60px', height: '30px' }}
      />
      <label className="form-check-label m-2" htmlFor="toggleSwitch">
        {isOn ? 'On' : 'Off'}
      </label>
    </div>
  );
};

export default ToggleSwitch;
