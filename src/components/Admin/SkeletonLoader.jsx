import React from 'react';
import styles from './AdminPage.module.css';

const SkeletonLoader = ({ rowCount }) => {
    return (
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(rowCount).fill(0).map((_, index) => (
                        <tr key={index}>
                            <td>
                                <div className={`${styles.skeletonLoaderCard} p-3`}>
                                    {/* <div className={styles.skeletonLoaderAvatar} /> */}
                                    <div className={`${styles.skeletonLoaderText} m-2`} />
                                </div>
                            </td>
                            <td>
                                <div className={`${styles.skeletonLoaderText} m-2`} />
                            </td>
                            <td>
                                <div className={`${styles.skeletonLoaderText} m-2`} />
                            </td>
                            <td>
                                <div className="row">
                                    <div className={`${styles.skeletonLoaderBtn} m-2`} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonLoader;
