import React from 'react';

const Firefly = () => {
  const style = {
    left: `${Math.random() * 100}vw`,
    animationDelay: `${Math.random() * 5}s`,
  };

  return (
    <div
      style={style}
      className="absolute w-2 h-2 bg-primary rounded-full animate-firefly opacity-0"
    />
  );
};

export default Firefly;