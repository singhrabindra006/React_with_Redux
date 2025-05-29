import React from 'react';
import './Container.css'

const Container = ({ children }) => {
  return (
    <div className="card container" style={{ width: '70%' }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Container;
