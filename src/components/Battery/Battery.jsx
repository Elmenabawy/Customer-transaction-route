// // BatteryCapsule.js
// import React from 'react';
// import styles from './Battery.module.css';

// function BatteryCapsule() {
//   return (
//     <>
//     <div className="d-flex justify-content-center ">
//         <div className={styles.batteryCapsule}>
//           <div className={styles.batteryFill} style={{ width: '60%' }} />
//           <span className={styles.batteryPercentage}>60%</span>
//         </div>
//     </div>
//     </>
//   );
// }

// export default BatteryCapsule;












// BatteryCapsule.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import styles from './Battery.module.css';

// function BatteryCapsule() {
//   const [batteryPercentage, setBatteryPercentage] = useState(0);

//   useEffect(() => {
//     axios.get('https://gogreenserver-1-1-numd.onrender.com/api/66744f6c2068150070637a34/getBatteryPercentage')
//       .then(response => {
//         setBatteryPercentage(response.data.battery_percentage);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <>
//       <div className="d-flex justify-content-center">
//         <div className={styles.batteryCapsule}>
//           <div
//             className={styles.batteryFill}
//             style={{
//               width: `${batteryPercentage}%`,
//             }}
//           />
//           <span className={styles.batteryPercentage}>{batteryPercentage}%</span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BatteryCapsule;









import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Battery.module.css';

function BatteryCapsule() {
  const [batteryPercentage, setBatteryPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.thingspeak.com/channels/2579256/fields/2.json',
          {
            params: {
              results: 2,
              api_key: 'GEOV0XJ8ORJ7ITV9' // Use `params` to include the API key and other parameters
            }
          }
        );

        // Assuming the battery percentage is in the first field of the first result
        const batteryPercentage = response.data.feeds[0]?.field2 || 0;

        setBatteryPercentage(batteryPercentage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className={styles.batteryCapsule}>
        <div
          className={styles.batteryFill}
          style={{
            width: `${batteryPercentage}%`,
          }}
        />
        <span className={styles.batteryPercentage}>{batteryPercentage}%</span>
      </div>
    </div>
  );
}

export default BatteryCapsule;
