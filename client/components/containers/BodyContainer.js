import React from 'react';

import './BodyContainer.css';
import snowmiesBg from '../../assets/imgs/snowmies-bg.jpg';

const BodyContainer = ({ children }) => {
  return (
    <div
      className="body-container"
      style={{
        background: `url(${snowmiesBg})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      {children}
    </div>
  );
};

export default BodyContainer;