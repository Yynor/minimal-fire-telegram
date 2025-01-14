import React from 'react';
import Firefly from './Firefly';

const FirefliesBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, index) => (
        <Firefly key={index} />
      ))}
    </div>
  );
};

export default FirefliesBackground;