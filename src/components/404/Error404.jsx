import React from "react";
import styles from "./Error404.module.css"; // Import your CSS module
import backgroundImage from "../../Assets/images/Error.jpg"; // Import your image file

const Error404 = () => {
    return (
        <>
            <div className="container">
                <div className={styles.imageContainer}>
                    <img src={backgroundImage} alt="Error 404" className={styles.image} />
                    
                </div>
                <p className="d-flex justify-content-center text-dark fw-bolder">Page Not Found</p>
            </div>
            
        </>
        
    );
};

export default Error404;
