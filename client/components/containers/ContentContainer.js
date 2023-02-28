import React from 'react';

import './ContentContainer.css';

const ContentContainer = ({ children, togglePic }) => {
  return (
    <main className="content-container" onClick={togglePic}>
      {children}
    </main>
  );
};

export default ContentContainer;